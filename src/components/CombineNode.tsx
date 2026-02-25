import { Handle, Position, useNodeConnections, useNodesData } from '@xyflow/react'

export function CombineNode({ id }) {
	const connections = useNodeConnections({ type: 'target' })

	const nodesData = useNodesData(
		connections.map(c => c.source)
	)

	const numbers: number[] = []
	const strings: string[] = []

	nodesData.forEach(node => {
		const value = node?.data?.value
		if (value !== undefined && value !== null) {
			if (typeof value === 'number') {
				numbers.push(value)
			} else if (typeof value === 'string') {
				strings.push(value)
			}
		}
	})

	const numberSum = numbers.reduce((acc, n) => acc + n, 0)
	const stringConcat = strings.join('')

	const combinedResult = `${stringConcat} ${numberSum !== 0 ? numberSum : ""}`

	return (
		<div className="basic-node">
			<Handle type="target" position={Position.Left} />
			<label>Combiner</label>
			<div>{!combinedResult || !combinedResult.replace(/\s/g, '').length ? "None to show." : combinedResult}</div>
		</div>
	)
}
