import { useState, useCallback } from 'react'
import { Handle, Position, useReactFlow } from '@xyflow/react'

export function TextUpdaterNode({id, data}) {
  const { updateNodeData } = useReactFlow()
  const [text, setText] = useState(data.value)

  const onChange = useCallback((evt) => {
    setText(evt.target.value || data.value)
  }, [])

  return (
    <div className="basic-node">
      <Handle type="source" position={Position.Right} />
      
      <div>
        <label htmlFor="text">Text:</label>
        <input value={data.value} id="text" name="text" onChange={onChange} className="nodrag"/>
      </div>
    </div>
  )
}