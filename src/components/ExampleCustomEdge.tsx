import {
  BaseEdge,
  getStraightPath,
  EdgeLabelRenderer,
  useReactFlow,
} from '@xyflow/react'

export function ExampleCustomEdge({ id, sourceX, sourceY, targetX, targetY }) {
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
