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