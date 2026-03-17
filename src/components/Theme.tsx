import { Handle, Position, useNodeConnections, useNodesData } from '@xyflow/react'
import { css } from '@emotion/react'

export function Theme({ id }) {
	const connections = useNodeConnections({
		handleType: 'target'
	})

	const nodesData = useNodesData(connections.map(c => c.source))

	console.log('Theme', nodesData)

	return (
		<div className="basic-node">
			<label>Theme</label>
			<Handle type="source" position={Position.Left} />

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
						<input value={"no value"} id="text" name="text" className="nodrag"/>
					</div>
				</div>

			</div>
		</div>
	)
}