import { useEffect } from 'react'
import { Handle, Position, useNodeConnections, useNodesData } from '@xyflow/react'
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
	// console.log(themes)

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

	const themePalette = themes[data.value];

	return (
		<div className="basic-node">
			<label>Theme Palette: <span>{data.value}</span></label>

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

				{Object.keys(themePalette).map((key, index) => (
					<>
						<Handle
							type="target"
							position={Position.Left}
							css={css`top: calc(${index * 12.5}% + 50px)`} 
							id={`${data.value}_${key}`}
						/>
						<PaletteSwatch
							label={key}
							color={themePalette[key]}
						/>
					</>
				))}

			</div>

			
		</div>
	)
}
