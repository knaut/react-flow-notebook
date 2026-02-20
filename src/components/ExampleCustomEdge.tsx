import {
  BaseEdge,
  getSimpleBezierPath,
  getSmoothStepPath,
  EdgeLabelRenderer,
  useReactFlow,
  Position
} from '@xyflow/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export function ExampleCustomEdge({ id, sourceX, sourceY, targetX, targetY }) {
  const { deleteElements } = useReactFlow()

  const [edgePath, labelX, labelY] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition: Position.Right,
    targetX,
    targetY,
    targetPosition: Position.Left,
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
            pointerEvents: 'all',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '4px 8px'
          }}
          className="nodrag nopan"
        >
          <FontAwesomeIcon icon={faTrash} style={{ color: 'var(--red-bright)' }} />
        </button>
      </EdgeLabelRenderer>
    </>
  )
}
