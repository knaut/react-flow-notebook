import { Handle, Position, useNodeConnections, useNodesData } from '@xyflow/react'
import { useStore } from '../store/useStore'

export function ThemeRenderer({ id, data }) {
  const { theme, setTheme } = useStore()
  return (
    <div className='basic-node'>
      <label>Theme Renderer: <span>{data.value}</span></label>

      <Handle
        type="target"
        position={Position.Left}
        // id={`${data.value}_output`}
      />

      Final color preview goes here
    </div>
  )
}
