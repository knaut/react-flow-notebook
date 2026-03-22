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
  // nodesData should be a theme object, else we do nothing (or provide a warning?)
  // additionally, if this comes from a switch, it's an array of values ಠ_ಠ
  let palette = null
    if (Array.isArray(nodesData[0]?.data?.value)) {

      for (let i = 0; i < nodesData[0].data.value.length; i++) {
        const v = nodesData[0].data.value[i]
        if (v?.theme) {
          palette = v.theme.palette
        }
      }

    } else {
      palette = nodesData[0]?.data?.value.theme.palette
    }

  useEffect(() => {
    


    if (palette) {
      setTheme(palette)
    }
  }, [nodesData])

  return (
    <div className='basic-node'>
      <label>Theme Renderer: <span>{data.value}</span></label>
      <Handle
        type="target"
        position={Position.Left}
      />
      {theme ? (
        <div css={css`
          display: flex;
          flex-direction: row;
        `}>
          {Object.keys(theme).map((key, index) => (
            <div key={key} css={css`
              background: ${sanitizeCssValue(theme[key])};
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
