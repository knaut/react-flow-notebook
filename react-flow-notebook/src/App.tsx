
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

import NumberInputNode, { RandomNumber } from './components/NumberInput'
import { CustomEdge } from './components/CustomEdge'
import { TextUpdaterNode } from './components/TextUpdaterNode'

import { 
  createNodes, 
  getInitialNodes,
  getInitialEdges
} from './utils'



export default function App() {
  const [nodes, setNodes] = useState(getInitialNodes())
  const [edges, setEdges] = useState(getInitialEdges())

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
        nodeTypes={{
          textUpdater: TextUpdaterNode,
          numberInputNode: NumberInputNode
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
      </ReactFlow>
    </div>
  )

}










