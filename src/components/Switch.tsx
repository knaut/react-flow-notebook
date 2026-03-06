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

interface SwitchableState {
	toggle: boolean
	value: any
}

function collateSwitchableData(nodesData) {
	const arr: SwitchableState[] = []

	for (let i = 0; i < nodesData.length; i++ ) {
		
	}
}

function SwitchBlock({ data }) {
	const [toggle, setToggle] = useState<SwitchableState>()

	const handleToggle = useCallback(() => {
		setToggle(!toggle)
	})

	console.log({data})

	return (
		<div css={css`
			display: flex;
			flex-direction: row;
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
	)
}

// a node that passes through values when a button is toggled
export function Switch({id, data}) {
	const [toggle, setToggle] = useState<SwitchableState[]>([])
	const { updateNodeData } = useReactFlow()

	const connections = useNodeConnections({
		handleType: 'target',
	})

	const nodesData = useNodesData(connections.map(c => c.source))
	
	console.log({connections, nodesData})


	// const handleToggle = useCallback(event => {
	// 	if (toggle) {
	// 		setToggle(false)
	// 		// updateNodeData(id, { value: false })
	// 	} else {
	// 		setToggle(true)
	// 		// nodesData.forEach(node => {
	// 		// 	if (node?.id !== id) {
	// 		// 		const value = node?.data?.value
	// 		// 		updateNodeData(id, { toggle, value })
	// 		// 	}
	// 		// })
	// 	}
	// }, [id, toggle, setToggle])

	// useEffect(() => {
	// 	console.log('useEffect toggle changed')
	// 	if (toggle) {
			
	// 	}
	// }, [toggle])

	// useEffect(() => {
	// 	console.log('useEffect', sources)
	// 	if (sources.length === 0) {
	// 		setToggle(false)
	// 		updateNodeData(id, { value: false })
	// 	}
	// }, [sources.length])

	return (
		<div className="basic-node">
			<label>Switch</label>
			<Handle type="target" position={Position.Left} />
			<div css={css`
				display: flex;
				flex-direction: column;
				gap: 8px;
			`}>
				{nodesData.map((n, i) => <SwitchBlock id={n.id} data={n.data} key={i}/>)}
			</div>
			<Handle type="source" position={Position.Right} />
		</div>
	)
}