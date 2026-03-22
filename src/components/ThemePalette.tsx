import { useEffect, useCallback } from 'react'
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
	// const { theme, setTheme } = useStore()
	const connections = useNodeConnections({
		handleType: 'target'
	})

	const nodesData = useNodesData(connections.map(c => c.source))

	const color = nodesData[0]?.data?.value || 'no value'

	// console.log(nodesData)

	// this line should go in a theme renderer/switcher
	// useEffect(() => {
	// 	setTheme({
	// 		nodeColor: color
	// 	})
	// }, [color])

	// const palette = themes[data?.value];

	// console.log(palette, data?.value)

	// const update = useCallback(() => {
	// 	updateNodeData(id, { value: {		//todo: define these patterns as types
	// 		theme: {
	// 			key: data.value,
	// 			palette
	// 		}
	// 	}})
	// })

	// useEffect(() => {
	// 	// load in our static theme colors based on key
	// 	// and add it to our nodesData

	// 	update()
	// }, [])

	// case: theme palette prepopulated from initial state
	const { palette } = data.value.theme

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
							css={css`top: calc(${index * 12.5}% + 50px)`} 
							id={`${data.value}_${key}`}
						/>
						<PaletteSwatch
							label={key}
							color={palette[key]}
						/>
					</div>
				))}

			</div>

			
		</div>
	)
}
