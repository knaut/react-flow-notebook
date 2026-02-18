import { useCallback, useState } from 'react'
import { Handle, Position, useReactFlow } from '@xyflow/react'
import { randomInteger } from '../utils'

export function RandomNumber({id, data}) {
	const { updateNodeData } = useReactFlow()
	const [number, setNumber] = useState(data.value)

	const onButtonClick = useCallback(evt => {
		const randInt = randomInteger()

		setNumber(randInt)
		updateNodeData(id, { value: randInt })
	}, []);

	return (
		<div className="basic-node">
			<button onClick={onButtonClick}>Random Integer</button>
			<div>{number}</div>
			<Handle type="source" position={Position.Right} />
		</div>
	)
}