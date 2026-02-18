import { useCallback, useState } from 'react'
import { Handle, Position, useReactFlow } from '@xyflow/react'
import { randomInteger } from '../utils'

export function NumberInput({ id, data }) {
	const [number, setNumber] = useState(data.value || 0)
	const { updateNodeData } = useReactFlow()


	const onChange = useCallback((evt) => {
		const cappedNumber = Math.round(
			Math.min(255, Math.max(0, evt.target.value))
		)

		setNumber(cappedNumber)
		updateNodeData(id, { value: cappedNumber })
	}, [id, updateNodeData])

	return (
		<div className="basic-node">
			<div>{data.label}</div>
			<input
				id={`number-${id}`}
				name="number"
				type="number"
				min="0"
				max="255"
				onChange={onChange}
				className="nodrag"
				value={number}
			/>
			<Handle type="source" position={Position.Right} />
		</div>
	)
}


