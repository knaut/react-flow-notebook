import { useCallback } from 'react'
import { Handle, Position } from '@xyflow/react'

export function TextUpdaterNode(props) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value)
  }, [])

  return (
    <div className="basic-node">
      <Handle type="source" position={Position.Right} />
      
      <div>
        <label htmlFor="text">Text:</label>
        <input id="text" name="text" onChange={onChange} className="nodrag"/>
      </div>
    </div>
  )
}