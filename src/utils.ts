import { NODE_TYPES, EDGE_TYPES } from './constants'

export function createNodes() {
  const nodes = []

  for (let i = 0; i < 10; i++) {
    nodes.push({
      id: `test-id-${i}`,  // test-id-1
      data: {
        test: `my id is ${i}`
      },
      position: {
        x: 100 * i,
        y: 100 * i
      }
    })
  }

  return nodes
}

export function randomInteger() {
  return Math.floor((Math.random() * 10) * (Math.random() * 10))
}

export function getInitialNodes() {
  return  [
    {
      id: 'n3',
      type: NODE_TYPES.TEXT_UPDATER,
      position: {
        x: 0, y: 0
      },
      data: {
        value: "Hello!"
      }
    },
    {
      id: 'n4',
      type: NODE_TYPES.NUMBER_INPUT,
      position: {
        x: 0, y: 150
      },
      data: {
        value: 223
      }
    },
    {
      id: 'n5',
      type: NODE_TYPES.RANDOM_NUMBER,
      position: {
        x: 0, y: 300
      },
      data: {
        value: randomInteger()
      }
    },
    {
      id: 'n6',
      type: NODE_TYPES.COMBINE,
      position: {
        x: 400, y: 150
      }
    }
  ]
}

export function getInitialEdges() {
  return [
    {
      id: 'n3-n6',
      source: 'n3', // TextUpdaterNode
      target: 'n6', // DisplayNode
      type: EDGE_TYPES.EXAMPLE_CUSTOM_EDGE,
    },
    {
      id: 'n4-n6',
      source: 'n4', // NumberInput
      target: 'n6', // DisplayNode
      type: EDGE_TYPES.EXAMPLE_CUSTOM_EDGE,
    },
    {
      id: 'n5-n6',
      source: 'n5', // RandomNumber
      target: 'n6', // DisplayNode
      type: EDGE_TYPES.EXAMPLE_CUSTOM_EDGE,
    }
  ]  
}

