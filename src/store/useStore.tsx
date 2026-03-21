import { create } from 'zustand'
import { addEdge, applyNodeChanges, applyEdgeChanges } from '@xyflow/react'
import { getInitialNodes, getInitialEdges } from '../utils'
import { EDGE_TYPES } from '../constants'

export const useStore = create((set, get) => ({
  nodes: getInitialNodes(),
  edges: getInitialEdges(),
  onNodesChange: changes => {
    set({
      nodes: applyNodeChanges(changes, get().nodes)
    })
  },
  onEdgesChange: changes => {
    set({
      edges: applyEdgeChanges(changes, get().edges)
    })
  },
  onConnect: connection => {
    set({
      edges: addEdge({ ...connection, type: EDGE_TYPES.EXAMPLE_CUSTOM_EDGE }, get().edges)
    })
  },
  setNodes: nodes => {
    set({ nodes })
  },
  setEdges: edges => {
    set({ edges })
  }
}))


