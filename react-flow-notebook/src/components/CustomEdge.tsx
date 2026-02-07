
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

export function CustomEdge(props) {
  const { id, sourceX, sourceY, targetX, targetY, label } = props

  const { deleteElements } = useReactFlow()

  const [edgePath, labelX, labelY] = getStraightPath({
    sourceX,
    sourceY,
    targetX,
    targetY
  })

  // console.log(`translate(-50%, -50) translate(${labelX}px, ${labelY}px)`)

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
