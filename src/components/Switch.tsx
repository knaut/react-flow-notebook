import { useState, useEffect, useCallback } from 'react'
import { 
	Handle,
	Position,
	useReactFlow,
	useNodeConnections,
	useNodesData
} from '@xyflow/react'
import { css } from '@emotion/react'

const ledW = 20;
const ledH = 12;

// a node that passes through values when a button is toggled
export function Switch({id, data}) {
	const [toggle, setToggle] = useState()
	const { updateNodeData } = useReactFlow()

	const connections = useNodeConnections({type: 'target'})
	// const sourceConnections = useNodeConnections({ type: 'source' })
	const nodesData = useNodesData(connections.map(c => c.source))
	console.log(nodesData)

	const handleToggle = useCallback(event => {
		if (toggle) {
			setToggle(false)
			updateNodeData(id, { value: false })
		} else {
			setToggle(true)
			nodesData.forEach(node => {
				if (node?.id !== id) {
					const value = node?.data?.value
					updateNodeData(id, { value })
				}
			})
		}
	}, [id, toggle, setToggle])


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
					<button onClick={handleToggle}>{toggle ? 'on' : 'off'}</button>
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
							background: ${toggle ? "var(--cyan-bright)" : "var(--green-dark)"};
							box-shadow: ${toggle ? "0 0 10px var(--cyan-bright)" : "0 0 0 #000"};
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