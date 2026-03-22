/*
  create a selection of color palettes (and maybe background patterns)
  for switchable color themes
*/

const themeVars = {
  nodeColor: {
    selector: null,  // selector needs to be set, starts as null, could be string or array of strings (for multiple targets)
    baseValue: null
  },
  edgeColor: {
    selector: null,
    baseValue: null
  },
  nodeTextColor: {
    selector: null,
    baseValue: null
  },
  nodeInputColor: {
    selector: null,
    baseValue: null
  }
}

interface ThemeVars {
  nodeColor: {
    selector: null | string | string[],  // selector needs to be set, starts as null, could be string or array of strings (for multiple targets)
    baseValue: string
  },
  edgeColor: {
    selector: null | string | string[],
    baseValue: string
  },
  edgeControlColor: {
    selector: null | string | string[],
    baseValue: string
  },
  nodeTextColor: {
    selector: null | string | string[],
    baseValue: string
  },
  nodeInputColor: {
    selector: null | string | string[],
    baseValue: string
  }
}

// we could use hex vals here, but for semantic clarity we'll use css vars
export const SciFi = {
  nodeColor: '--purple-dark',
  edgeColor: '--purple-light',
  edgeControlColor: '--red-bright',
  nodeTextColor: '--green-bright',
  nodeInputColor: '--cyan-bright',

  mapBackground: '#141414',
  mapDots: '#777'
}

export const Cappucino = {
  nodeColor: '--beige',
  edgeColor: '--teal-dark',
  edgeControlColor: '--pistachio',
  nodeTextColor: '--coffee',
  nodeInputColor: '--teal',

  mapBackground: '--gray',
  mapDots: '--milk'
}

// export default themes 
