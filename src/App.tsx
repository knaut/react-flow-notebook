
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
import '@radix-ui/themes/styles.css'

import { useShallow } from 'zustand/react/shallow'

import { NumberInput } from './components/NumberInput'
import { RandomNumber } from './components/RandomNumber'
import { ExampleCustomEdge } from './components/ExampleCustomEdge'
import { TextUpdaterNode } from './components/TextUpdaterNode'
import { CombineNode } from './components/CombineNode'
import { Switch } from './components/Switch'
import { Theme } from './components/Theme'
import { ColorPicker } from './components/ColorPicker'

import { getInitialNodes, getInitialEdges } from './utils'
import { NODE_TYPES, EDGE_TYPES } from './constants'

import { Theme as RadixTheme } from '@radix-ui/themes'

import { useStore } from './store/useStore'

const selector = state => ({
  nodes: state.nodes,
  edges: state.edges,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect
})

export default function App() {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect } = useStore(
    useShallow(selector)
  )

  return (
    <RadixTheme>
      <div data-color-mode='dark' style={{ width: '100vw', height: '100vh' }}>
        <ReactFlow
          colorMode="dark"
          connectionLineType="smoothstep"
          nodeTypes={{
            [NODE_TYPES.TEXT_UPDATER]: TextUpdaterNode,
            [NODE_TYPES.NUMBER_INPUT]: NumberInput,
            [NODE_TYPES.RANDOM_NUMBER]: RandomNumber,
            [NODE_TYPES.COMBINE]: CombineNode,
            [NODE_TYPES.SWITCH]: Switch,
            [NODE_TYPES.THEME]: Theme,
            [NODE_TYPES.COLOR_PICKER]: ColorPicker,
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
    </RadixTheme>
  )

}










