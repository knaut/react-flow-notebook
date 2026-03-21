import { useEffect } from 'react'
import { Handle, Position, useNodeConnections, useNodesData } from '@xyflow/react'
import { css } from '@emotion/react'
import { createPortal } from 'react-dom'
import { useStore } from '../store/useStore'

export function Theme({ id }) {
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
			<label>Theme</label>
			<Handle type="target" position={Position.Left} />

			<div css={css`display: flex`}>

				<div css={css`
					display: flex;
					align-items: center;

				`}>
					<div css={css`
						flex-grow: 1;
						padding: 0 12px;
					`}>
						Node Color:
					</div> 
					<div css={css`
						flex-grow: 1;
					`}>
						<input readOnly value={color} id="text" name="text" className="nodrag"/>
					</div>
				</div>

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
