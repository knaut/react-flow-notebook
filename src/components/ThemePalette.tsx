import { useEffect, useState, useCallback } from 'react'
import {
	Handle,
	Position,
	useNodeConnections,
	useNodesData,
	useReactFlow
} from '@xyflow/react'
import { css } from '@emotion/react'
import { createPortal } from 'react-dom'
import { useStore } from '../store/useStore'
import { camelCaseToCapitalizeWithSpaces, sanitizeCssValue } from '../utils'

import * as themes from '../themes'


function PaletteSwatch({ label, color }) {
	return (
		<div css={css`
			display: flex;
			align-items: center;
		`}>
			<div css={css`
				padding: 0 12px 0 0;
				width: 140px;
			`}>
				{camelCaseToCapitalizeWithSpaces(label)}:
			</div> 
			<div css={css`
				padding: 4px !important;
				width: 50px !important;
				margin-right: 12px;
				border-width: 2px;
				border-style: solid;
				border-radius: 6px;	/* use a variable here */
			`}>
				<div css={css`
					background: ${sanitizeCssValue(color)};
					height: 20px;
					width: 100%;
					border-radius: 3px;
				`}>
					<span css={css`display:none`}>Color</span>
				</div>
			</div>
			<div css={css`
				width: 120px;
			`}>
				<input readOnly value={color} id="text" name="text" className="nodrag"/>
			</div>
		</div>
	)
}

export function ThemePalette({ id, data }) {
	const { updateNodeData } = useReactFlow()
	const connections = useNodeConnections({
		handleType: 'target'
	})

	const nodesData = useNodesData(connections.map(c => c.source))
	const color = nodesData[0]?.data?.value || 'no value'
	const { palette } = data.value.theme

	const [localPalette, setLocalPalette] = useState(palette)

	useEffect(() => {
		// for each connection, we have to match the source value to the associated
		// theme color.

		const newPalette = {
			...localPalette
		}

		for (let i = 0; connections.length > i; i++) {
			const { targetHandle, source } = connections[i]
			const targetHandleKey = targetHandle.split('_')[1]

			if (newPalette[targetHandleKey]) {

				const handleSourceValue = nodesData.map(node => {
					if (node.id === source) {
						
						newPalette[targetHandleKey] = node.data.value

					}
				})

			}
		}


		setLocalPalette(newPalette)
		updateNodeData(id, {
			value: {
				theme: {
					...data.value.theme,
					palette: newPalette	
				}
				
			}
		})

	}, [connections, nodesData])

	return (
		<div className="basic-node">
			<label>Theme Palette: <span>{data.value.theme.key}</span></label>

			<Handle
				type="source"
				position={Position.Right}
				// id={`${data.value}_output`}
			/>

			<div css={css`
				display: flex;
				flex-direction: column;
				gap: 8px;
			`}>

				{Object.keys(palette).map((key, index) => (
					<div key={key}>
						<Handle
							type="target"
							position={Position.Left}
							css={css`top: calc(${index * 11.25}% + 50px)`} 
							id={`${data.value.theme.key}_${key}`}
						/>
						<PaletteSwatch
							label={key}
							color={localPalette[key]}
						/>
					</div>
				))}

			</div>

			
		</div>
	)
}
