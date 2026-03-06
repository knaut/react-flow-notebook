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
	active: boolean
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

function mergeObjects(arr1, arr2, key) {
	const all = arr1.concat(arr2)

	const obj = {}

	for (let i = 0; i < all.length; i++) {
		const { id } = all[i]

		if (!obj[ id ]) {
			obj[ id ] = all[i]
		} else {
			obj[ id ] = {
				...all[i],
				active: all[id].active ? true : false
			}
		}
	}

	return Object.keys(obj).map(key => obj[key])
}


function mergeNodeValues(nodesData, blocks) {
	const newNodesData = nodesData.map(node => ({
		id: node.id,
		active: false,
		value: node.data.value
	}))

	const merged = mergeObjects(newNodesData, blocks, 'id')		

	// collate the toggled values to be passed onto combiner
	const collatedValues = []
	// const collatedToggles = []
	for (let i = 0; i < merged.length; i++) {
		if (merged[i].active) {
			collatedValues.push(merged[i].value)
		}
		// collatedToggles.push(merged[i].toggle)
	}

	return collatedValues

}


// a node that passes through values when a button is toggled
export function Switch({id, data}) {
	const { updateNodeData } = useReactFlow()
	const connections = useNodeConnections({
		handleType: 'target',
	})
	const nodesData = useNodesData(connections.map(c => c.source))
	
	const [blocks, setBlocks] = useState<SwitchableState[]>([])
	const [toggles, setToggles] = useState([])


	useEffect(() => {
		
		
		const collatedValues = mergeNodeValues(nodesData, blocks)
		updateNodeData(id, { value: collatedValues })
			
	}, [connections.length])

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
				{nodesData.map((n, i) => <SwitchBlock id={n.id} data={n.data} key={i}/>)}
			</div>
			<Handle type="source" position={Position.Right} />
		</div>
	)
}