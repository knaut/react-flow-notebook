
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
import { CustomEdge } from './components/CustomEdge'
import { TextUpdaterNode } from './components/TextUpdaterNode'

import { getInitialNodes, getInitialEdges } from './utils'



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
          textUpdater: TextUpdaterNode,
          numberInputNode: NumberInput,
          randomNumber: RandomNumber
        }}
        edgeTypes={{
          'custom-edge': CustomEdge
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










