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

interface SwitchInternal {
	[key: string]: SwitchableBlock
}

interface SwitchableBlock {
	active: boolean
	value: any
}

interface SwitchInternal {
	[key: string]: SwitchableBlock
}

interface SwitchInternalUpdate {
	// e.g. { "number-1": false }
	[key: string]: boolean
}

function SwitchBlock({ id, data, handleToggleSwitchBlock }) {
	const [toggle, setToggle] = useState<boolean>(false)

	const handleToggle = useCallback(() => {
		const newToggle = !toggle
		setToggle(newToggle)

		const internalUpdate: SwitchInternalUpdate = {
			[id]: newToggle
		}

		handleToggleSwitchBlock(internalUpdate)
	})

	return (
		<div css={css`
			display: flex;
			flex-direction: row;
		`}>
			<div css={css`
				width: 33%;
				display: flex;
				align-items: center;
			`}>
				<button onClick={handleToggle}>{toggle ? 'on' : 'off'}</button>
			</div>
			<div css={css`
				width: 23%;
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
						left: 8px;
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
			<div css={css`
				width: 44%;
				white-space: nowrap;
				text-overflow: ellipsis;
				display: flex;
				align-items: center;

			`}>
				<div css={css`
					background: var(--purple-dark);
					padding: 6px 9px;
					border-radius: 8px;
					font-size: 11px;
					color: var(--cyan-bright);
					width: 100%;
				`}>
					{data.value}
				</div>
			</div>
		</div>
	)
}


// TODO: add unit tests for pure function
function mergeSwitchInternalWithNodesData(internal: SwitchInternal, nodesData: array, internalUpdate: SwitchInternalUpdate) {
	const internalKeys = Object.keys(internal)	// used later
	const newInternal = {...internal}
	const nodeData: array = []

	for (let i = 0; i < nodesData.length; i++) {
		const node = nodesData[i]

		// what if our internal state has a key not in nodesData?
		// we are removing a node connection
		if (!internalKeys.includes(node.id)) {
			delete newInternal[node.id]
		}

		// what if we are adding a newly connected node to our internal state?
		if (!internal[node.id]) {
			newInternal[node.id] = {
				active: false,
				value: node.data.value
			}
		}

		// what if the new internal already has this node data?
		if (newInternal[node.id]) {
			// are we updating it?
			if (internalUpdate) {
				const updateKey = Object.keys(internalUpdate)[0]
				// make sure this key matches this node id
				if (updateKey === node.id) {
					newInternal[updateKey].active = internalUpdate[updateKey]
				}
			}

			// if active, add it to our publicly exposed node data
			if (newInternal[node.id].active) {
				nodeData.push(node.data.value)
			}			
		}

	}

	return {
		internal: newInternal,
		nodeData
	}
}


// a node that passes through values when a button is toggled
export function Switch({id, data}) {
	const { updateNodeData } = useReactFlow()
	const connections = useNodeConnections({
		handleType: 'target',
	})
	const nodesData = useNodesData(connections.map(c => c.source))
	const [internal, setInternal] = useState<SwitchInternal>({});

	const handleToggleSwitchBlock = useCallback((internalUpdate) => {
		const merged = mergeSwitchInternalWithNodesData(internal, nodesData, internalUpdate)
		setInternal(merged.internal)
		updateNodeData(id, { value: merged.nodeData })
	})

	const update = useCallback(() => {
		const merged = mergeSwitchInternalWithNodesData(internal, nodesData)
		// set our internal state (i.e. toggles)
		setInternal(merged.internal)
		// then update the node state
		updateNodeData(id, { value: merged.nodeData })
	})

	useEffect(() => {
		// update on first load to determine initial state
		// based on starting connections (if any)
		update()
	}, [])


	useEffect(() => {
		// whenever source nodes change their data, update our internals
		// and exposed node state
		update()
	}, [nodesData])

	return (
		<div 
			className="basic-node"
			css={css`
				width: 200px;
			`}
		>
			<label>Switch</label>
			<Handle type="target" position={Position.Left} />
			<div css={css`
				display: flex;
				flex-direction: column;
				gap: 8px;
			`}>
				{nodesData.map((n, i) => (
					<SwitchBlock
						id={n.id}
						data={n.data}
						key={i}
						handleToggleSwitchBlock={handleToggleSwitchBlock}
					/>
				))}
			</div>
			<Handle type="source" position={Position.Right} />
		</div>
	)
}
