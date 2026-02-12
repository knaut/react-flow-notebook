import { useCallback } from 'react'
import { Handle, Position } from '@xyflow/react'

export function TextUpdaterNode(props) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value)
  }, [])

  return (
    <div className="basic-node">

      <Handle type="source" position={Position.Top} id="a"/>
      <Handle type="target" position={Position.Bottom} id="b"/>

      {/*<Handle
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
      </Handle>*/}
      
      <div>
        <label htmlFor="text">Text:</label>
        <input id="text" name="text" onChange={onChange} className="nodrag"/>
      </div>
    </div>
  )
}