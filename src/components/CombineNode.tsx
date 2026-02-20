import { Handle, Position, useNodeConnections, useNodesData } from '@xyflow/react'

export function CombineNode({ id }) {
	const connections = useNodeConnections({ type: 'target' })

	const nodesData = useNodesData(
		connections.map(c => c.source)
	)

	const combine = nodesData.reduce((acc, node) => acc + (node?.data?.value || 0), 0)

	return (
		<div className="basic-node">
			<Handle type="target" position={Position.Left} />
			<div>Combine:</div>
			<div>{combine}</div>
		</div>
	)
}