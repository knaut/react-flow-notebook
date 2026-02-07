
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

export function TextUpdaterNode(props) {
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