import { useState, useCallback } from 'react'
import { Handle, Position, useReactFlow } from '@xyflow/react'
import { css } from '@emotion/react'

export function TextUpdaterNode({id, data}) {
  const [text, setText] = useState(data.value || '')
  const { updateNodeData } = useReactFlow()

  const onChange = useCallback((evt) => {
    const newValue = evt.target.value
    setText(newValue)
    updateNodeData(id, { value: newValue })
  }, [id, updateNodeData])

  return (
    <div className="basic-node">
      <label>Text:</label>
      <Handle type="source" position={Position.Right} />
      
      <div css={css`display: flex`}>
        
        <div>
          <input value={text} id="text" name="text" onChange={onChange} className="nodrag"/>
        </div>

      </div>
    </div>
  )
}
