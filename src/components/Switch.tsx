import { useState, useCallback } from 'react'
import { Handle, Position, useReactFlow } from '@xyflow/react'
import { css } from '@emotion/react'

const ledW = 20;
const ledH = 12;

// a node that passes through values when a button is toggled
export function Switch({id, data}) {
	const [toggle, toggleState] = useState()
	const { updateNodeData } = useReactFlow()

	return (
		<div className="basic-node">
			<label>Switch</label>
			<Handle type="target" position={Position.Left} />
			<div css={css`
				display: flex
			`}>
				<div css={css`
					width: 50%;
				`}>
					<button>{toggle ? 'on' : 'off'}</button>
				</div>
				<div css={css`
					width: 50%;
					justify-content: center;
					align-content: center;
				`}>
					<div css={css`
						position: relative;
						width: 100%;
						&::before {
							content: '';
							display: block;
							position: absolute;
							top: calc(50% - ${ledH / 2}px);
							left: calc(50% - ${ledW}px);
							height: ${ledH}px;
							width: ${ledW}px;
							background: var(--green-dark);
							box-sizing: border-box;
							border: 2px solid rgba(0,0,0,0.3);
							border-radius: 30px;
						}						}
					`}/>
				</div>
			</div>
			<Handle type="source" position={Position.Right} />
		</div>
	)
}