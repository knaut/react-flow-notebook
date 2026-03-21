import { useEffect } from 'react'
import { Handle, Position, useNodeConnections, useNodesData } from '@xyflow/react'
import { css } from '@emotion/react'
import { createPortal } from 'react-dom'
import { useStore } from '../store/useStore'
import { camelCaseToCapitalizeWithSpaces } from '../utils'

import * as themes from '../themes'


function PaletteSwatch({ label, color }) {
	return (
		<div css={css`
			display: flex;
			align-items: center;
		`}>
			<div css={css`
				padding: 0 12px 0 0;
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
					background: ${color};
					height: 30px;
					width: 100%;
					border-radius: 3px;
				`}>
					<span css={css`display:none`}>Color</span>
				</div>
			</div>
			<div css={css`
				width: 80px;
			`}>
				<input readOnly value={color} id="text" name="text" className="nodrag"/>
			</div>
		</div>
	)
}

export function ThemePalette({ id }) {
	console.log(themes)

	const { theme, setTheme } = useStore()
	const connections = useNodeConnections({
		handleType: 'target'
	})

	const nodesData = useNodesData(connections.map(c => c.source))
	const color = nodesData[0]?.data?.value || 'no value'

	useEffect(() => {
		setTheme({
			nodeColor: color
		})
	}, [color])

	return (
		<div className="basic-node">
			<label>Theme Palette</label>
			<Handle type="target" position={Position.Left} />

			<div css={css`display: flex`}>

				<PaletteSwatch
					label={'nodeColor'}
					color={color}
				/>

			</div>
			{/*{createPortal(
				<style type="text/css">
					{`
						.react-flow__node > .basic-node {
							background: ${color} !important;
						}
					`}
				</style>,
				document.body
			)}*/}
		</div>
	)
}
