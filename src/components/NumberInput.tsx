import { useCallback, useState } from 'react'
import { Handle, Position, useReactFlow } from '@xyflow/react'
import { randomInteger } from '../utils'

// todo: warp had trouble with 0, parsing as 0123 instead of 123
// extract state logic into "handle number" function that can
// gracefully take any input and turn it into equivalent number type & value

// const onChange = useCallback((evt) => {
// 	const { value } = evt.target
// 	const parsed = parseInt(value);
// 	console.log(parsed)
// 	if (parsed) {
// 		const capped = Math.round(
// 			Math.min(255, Math.max(0, parsed))
// 		)
// 		console.log({capped})
// 		setNumber(capped)
// 		updateNodeData(id, { value: capped })
// 	} else {
// 		setNumber(0)
// 		updateNodeData(id, { value: 0 })
// 	}
// }, [id, updateNodeData])



function handleNumberInput( input: string ) {
	// input is the event value from a key press
	console.log(input, typeof input)

	return input
}

export function NumberInput({ id, data }) {
	const [number, setNumber] = useState<number>(data.value)
	const { updateNodeData } = useReactFlow()

	console.log({data, number, updateNodeData})


	const onChange = useCallback(event => {
		
		const result = handleNumberInput(event.target.value)

		setNumber(result)
		updateNodeData(id, { value: result })

	}, [id, updateNodeData])

	return (
		<div className="basic-node">
			<label>Number Input:</label>
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


