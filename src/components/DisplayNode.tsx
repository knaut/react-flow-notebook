import { Handle, Position, useNodeConnections, useNodesData } from '@xyflow/react'
<Handle type="source" position={Position.Right} />

export function DisplayNode({ id }) {
	const connections = useNodeConnections({ type: 'target' })

	const nodesData = useNodesData(
		connections.map(c => c.source)
	)

	const sum = nodesData.reduce((acc, node) => acc + (node?.data?.value || 0), 0)

	console.log({connections, nodesData, sum})

	return (
		<div className="basic-node">
			<Handle type="target" position={Position.Left} />
			<div>Sum: {sum}</div>
		</div>
	)
}