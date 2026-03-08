import { Handle, Position, useNodeConnections, useNodesData } from '@xyflow/react'

export function CombineNode({ id }) {
	const connections = useNodeConnections({
		handleType: 'target',
	})

	const nodesData = useNodesData(connections.map(c => c.source))

	const numbers: number[] = []
	const strings: string[] = []

	console.log('CombineNode', {nodesData})

	// console.log(numbers, strings, nodesData)

	nodesData.forEach(node => {
		const value = node?.data?.value
		if (value !== undefined && value !== null) {
			if (typeof value === 'number') {
				numbers.push(value)
			} else if (typeof value === 'string') {
				strings.push(value)
			} else {

				// assume to be object or array
				// for now, given switch block changes, say it's an array
				for (let i = 0; i < value.length; i++) {
					const v = value[i]

					if (typeof v === 'number') {
						numbers.push(v)
					} else if (typeof v === 'string') {
						strings.push(v)
					}
				}

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
