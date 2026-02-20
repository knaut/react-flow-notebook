
import { useState, useCallback } from 'react'
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import './additional.css'

import { NumberInput } from './components/NumberInput'
import { RandomNumber } from './components/RandomNumber'
import { ExampleCustomEdge } from './components/ExampleCustomEdge'
import { TextUpdaterNode } from './components/TextUpdaterNode'
import { DisplayNode } from './components/DisplayNode'

import { getInitialNodes, getInitialEdges } from './utils'
import { NODE_TYPES, EDGE_TYPES } from './constants'



export default function App() {
  const [nodes, setNodes] = useState(getInitialNodes())
  const [edges, setEdges] = useState(getInitialEdges())

  const onNodesChange = useCallback(
    changes => setNodes(
      nodesSnapshot => {
        // console.log('nodesSnapshot', nodesSnapshot)
        return applyNodeChanges(changes, nodesSnapshot)
      }
    ),
    [], 
  )

  const onEdgesChange = useCallback(
    changes => setEdges(
      edgesSnapshot => {
        // console.log('edgesSnapshot', edgesSnapshot)
        return applyEdgeChanges(changes, edgesSnapshot)
      }
    ),
    [],
  )
  
  const onConnect = useCallback(
    params => setEdges(
      edgesSnapshot => {
        // console.log('edgesSnapshot', edgesSnapshot)

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
        nodeTypes={{
          [NODE_TYPES.TEXT_UPDATER]: TextUpdaterNode,
          [NODE_TYPES.NUMBER_INPUT]: NumberInput,
          [NODE_TYPES.RANDOM_NUMBER]: RandomNumber,
          [NODE_TYPES.DISPLAY]: DisplayNode
        }}
        edgeTypes={{
          [EDGE_TYPES.EXAMPLE_CUSTOM_EDGE]: ExampleCustomEdge
        }}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Background/>
        <Controls/>
        <MiniMap nodeColor="#50F2E840"/>
      </ReactFlow>
    </div>
  )

}










