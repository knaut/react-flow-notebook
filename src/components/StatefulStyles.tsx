import { useEffect } from 'react'
import { useStore } from '../store/useStore'
import { sanitizeCssValue } from '../utils'

export function StatefulStyles({ id }) {
  const { theme, setTheme } = useStore()

  useEffect(() => {
    setTheme({
      nodeColor: '--purple-mid'
    })
  }, [])

  return (
    <style type="text/css">
      {`
        .react-flow__node > .basic-node {
          background: ${sanitizeCssValue(theme.nodeColor)} !important;
        }
      `}
    </style>
  )
}
