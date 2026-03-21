import { useEffect } from 'react'
import { useStore } from '../store/useStore'

function sanitizeCssValue( string ) {
  if (string?.startsWith('--')) {
    // is a css var
    return `var(${string})`
  } else {
    return string
  }
}

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
