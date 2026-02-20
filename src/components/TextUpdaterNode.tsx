import { useState, useCallback } from 'react'
import { Handle, Position, useReactFlow } from '@xyflow/react'

export function TextUpdaterNode({id, data}) {
  const { updateNodeData } = useReactFlow()
  const [text, setText] = useState(data.value || '')

  const onChange = useCallback((evt) => {
    const newValue = evt.target.value
    setText(newValue)
    updateNodeData(id, { value: newValue })
  }, [id, updateNodeData])

  return (
    <div className="basic-node">
      <Handle type="source" position={Position.Right} />
      
      <div>
        <label htmlFor="text">Text:</label>
        <input value={text} id="text" name="text" onChange={onChange} className="nodrag"/>
      </div>
    </div>
  )
}
