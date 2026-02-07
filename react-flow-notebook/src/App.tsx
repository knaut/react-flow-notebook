
import { useState, useCallback } from 'react'
import {
  ReactFlow,
  Background,
  Controls,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  Position,
  Handle,
  BaseEdge,
  getStraightPath,

  EdgeLabelRenderer,
  useReactFlow

} from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import './additional.css'

import NumberInputNode, { RandomNumber } from './NumberInput'

function createNodes() {
  const nodes = []

  for (let i = 0; i < 10; i++) {
    nodes.push({
      id: `test-id-${i}`,  // test-id-1
      data: {
        test: `my id is ${i}`
      },
      position: {
        x: 100 * i,
        y: 100 * i
      }
    })
  }

  return nodes
}

const myNodes = createNodes()

// console.log(myNodes)

const initialNodes = [
  { 
    id: 'n1',
    position: {
      x: -50, y: -50
    },
    data: {
      label: 'Node 1'
    },
    type: 'input'
  },
  {
    id: 'n2',
    position: {
      x: 0, y: 100
    },
    data: {
      label: 'Node 2'
    }
  },
  {
    id: 'n3',
    type: 'textUpdater',
    position: {
      x: 100, y: 0
    },
    data: {
      value: 123
    }
  },
  {
    id: 'n4',
    type: 'numberInputNode',
    position: {
      x: 200, y: 100
    },
    data: {
      value: 123
    }
  }
]

const initialEdges = [
  {
    id: 'n1-n2',
    source: 'n1',
    target: 'n2',
    // type: 'step',
    type: 'custom-edge',

    label: 'connects with',
    animated: true
  }
]

const nodeTypes = {
  textUpdater: TextUpdaterNode,
  numberInputNode: NumberInputNode
}

const edgeTypes = {
  'custom-edge': CustomEdge
}

function TextUpdaterNode(props) {
  console.log("TextUpdaterNode", props)

  const onChange = useCallback((evt) => {
    console.log(evt.target.value)
  }, [])

  return (
    <div className="text-updater-node">

      <Handle type="source" position={Position.Top} id="a"/>
      <Handle type="target" position={Position.Bottom} id="b"/>

      <Handle
        id="c"
        position={Position.Right}
        type="source"
        style={{
          background: 'none',
          border: 'none',
          width: '1em',
          height: '1em'
        }}
      >
        
      </Handle>
      
      <div>
        <label htmlFor="text">Text:</label>
        <input id="text" name="text" onChange={onChange} className="nodrag"/>
      </div>
    </div>
  )
}


function CustomEdge(props) {
  const { id, sourceX, sourceY, targetX, targetY, label } = props

  const { deleteElements } = useReactFlow()

  const [edgePath, labelX, labelY] = getStraightPath({
    sourceX,
    sourceY,
    targetX,
    targetY
  })

  console.log(`translate(-50%, -50) translate(${labelX}px, ${labelY}px)`)

  return (
    <>
      <BaseEdge id={id} path={edgePath}/>
      <EdgeLabelRenderer>
        <button 
          onClick={() => deleteElements({ edges: [{ id }] })}
          style={{
            position: 'absolute',
            transform: `translate(-50%, -50%) translate(${labelX}px, ${labelY}px)`,
            pointerEvents: 'all'
          }}
          className="nodrag nopan"
        >delete</button>
      </EdgeLabelRenderer>
    </>
  )
}




export default function App() {
  const [nodes, setNodes] = useState(initialNodes)
  const [edges, setEdges] = useState(initialEdges)

  const onNodesChange = useCallback(
    changes => setNodes(
      nodesSnapshot => {
        console.log('nodesSnapshot', nodesSnapshot)
        return applyNodeChanges(changes, nodesSnapshot)
      }
    ),
    [], 
  )

  const onEdgesChange = useCallback(
    changes => setEdges(
      edgesSnapshot => {
        console.log('edgesSnapshot', edgesSnapshot)
        return applyEdgeChanges(changes, edgesSnapshot)
      }
    ),
    [],
  )
  
  const onConnect = useCallback(
    params => setEdges(
      edgesSnapshot => {
        console.log('edgesSnapshot', edgesSnapshot)

        // console.log('brrrrr')
        return addEdge(params, edgesSnapshot)
      }
    ),
    []
  )

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        colorMode="dark"
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Background/>
        <Controls/>
      </ReactFlow>
    </div>
  )

}










