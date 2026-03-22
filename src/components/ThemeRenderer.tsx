import { useEffect } from 'react'
import { Handle, Position, useNodeConnections, useNodesData } from '@xyflow/react'
import { useStore } from '../store/useStore'
import { sanitizeCssValue } from '../utils'
import { css } from '@emotion/react'

export function ThemeRenderer({ id, data }) {
  const { theme, setTheme } = useStore()

  const connections = useNodeConnections({
    handleType: 'target'
  })

  const nodesData = useNodesData(connections.map(c => c.source))

  console.log('ThemeRenderer', nodesData)

  // nodesData should be a theme object, else we do nothing (or provide a warning?)
  // additionally, if this comes from a switch, it's an array of values ಠ_ಠ


  // const { palette } = nodesData[0]?.data?.value[0]?.theme

  let palette = null
  if (Array.isArray(nodesData[0]?.data?.value)) {
    console.log(nodesData)
    palette = nodesData[0]?.data?.value[0]?.theme?.palette
  } else {
    palette = nodesData[0]?.data?.value.theme.palette
  }

  useEffect(() => {
    if (palette) {
      setTheme(palette)
    }
  }, [palette])

  return (
    <div className='basic-node'>
      <label>Theme Renderer: <span>{data.value}</span></label>

      <Handle
        type="target"
        position={Position.Left}
        // id={`${data.value}_output`}
      />

      {palette ? (
        <div css={css`
          display: flex;
          flex-direction: row;
        `}>
          {Object.keys(palette).map((key, index) => (
            <div key={key} css={css`
              background: ${sanitizeCssValue(palette[key])};
              height: 40px;
              width: 40px;
            `}>

            </div>
          ))}
        </div>
      ) : 'No valid palette provided.'}
    </div>
  )
}
