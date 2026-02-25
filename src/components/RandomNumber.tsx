import { useCallback, useState } from 'react'
import { css } from '@emotion/react'
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
			<label>Random Number</label>
			<div css={css`
				display: flex
			`}>
				<div css={css`
					width: 50%
				`}>
					<button onClick={onButtonClick}>Roll</button>
				</div>
				<div css={css`
					width: 50%;
					align-content: center;
					text-align: center;
				`}>{number}</div>
			</div>
			<Handle type="source" position={Position.Right} />
		</div>
	)
}