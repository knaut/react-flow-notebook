import { useCallback, useState } from 'react'
import { Handle, Position } from '@xyflow/react'
import { randomInteger } from '../utils'

export function RandomNumber({id, data}) {
	const [number, setNumber] = useState(data.value)

	const onButtonClick = useCallback(evt => {
		const randInt = randomInteger()

		setNumber(randInt)
	}, []);

	return (
		<div className="basic-node">
			<button onClick={onButtonClick}>Random Integer</button>
			<div>{number}</div>
			<Handle type="source" position={Position.Right} />
		</div>
	)
}


export function NumberInput({ id, data }) {
	const [number, setNumber] = useState(0)

	const onChange = useCallback((evt) => {
		const cappedNumber = Math.round(
			Math.min(255, Math.max(0, evt.target.value))
		)

		setNumber(cappedNumber)
	}, [])

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


