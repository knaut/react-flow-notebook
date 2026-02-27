import { useCallback, useState } from 'react'
import { Handle, Position, useReactFlow } from '@xyflow/react'
import { randomInteger } from '../utils'

function handleNumberInput( event ) {
	const { value } = event.target
	const parsed = parseInt(value)

	// parsing strings results in NaN
	if (Number.isNaN(parsed)) {
		return false
	} else {
		return parsed
	}
}

export function NumberInput({ id, data }) {
	const [number, setNumber] = useState<number>(data.value)
	const { updateNodeData } = useReactFlow()

	const onChange = useCallback(event => {
		const result = handleNumberInput(event)

		if (result !== false) {
			setNumber(result)
			updateNodeData(id, { value: result })
		} else {
			setNumber(0)
			updateNodeData(id, { value: 0 })
		}
	}, [id, updateNodeData])

	const onKeyDown = useCallback(event => {
		if (event.key === "Backspace") {
			if (number < 10) {
				setNumber(0)
				updateNodeData(id, { value: 0 })
			}
		}
	}, [id, number, updateNodeData])

	return (
		<div className="basic-node">
			<label>Number Input</label>
			<input
				id={`number-${id}`}
				type="text"
				onKeyDown={onKeyDown}
				onChange={onChange}
				className="nodrag"
				value={number}
			/>
			<Handle type="source" position={Position.Right} />
		</div>
	)
}


