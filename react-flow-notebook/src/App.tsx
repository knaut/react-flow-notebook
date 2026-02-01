import { useState, useCallback } from 'react'
import {
  ReactFlow,
  Background,
  Controls,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge } from '@xyflow/react'
import '@xyflow/react/dist/style.css'

const initialNodes = [
  { 
    id: 'n1',
    position: {
      x: 0, y: 0
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
  }
];

const initialEdges = [
  {
    id: 'n1-n2',
    source: 'n1',
    target: 'n2',
    type: 'step',
    label: 'connects with'
  }
];

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
        return addEdge(params, edgesSnapshot)
      }
    ),
    []
  )

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
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










