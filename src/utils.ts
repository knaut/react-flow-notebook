import { NODE_TYPES } from './constants'

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
      id: 'n1',
      position: {
        x: -50, y: -50
      },
      data: {
        label: 'Node 1'
      },
      type: 'input'
    },
    {
      id: 'n2',
      position: {
        x: 0, y: 100
      },
      data: {
        label: 'Node 2'
      }
    },
    {
      id: 'n3',
      type: NODE_TYPES.TEXT_UPDATER,
      position: {
        x: 100, y: 0
      },
      data: {
        value: 123
      }
    },
    {
      id: 'n4',
      type: NODE_TYPES.NUMBER_INPUT,
      position: {
        x: 200, y: 100
      },
      data: {
        value: 123
      }
    },
    {
      id: 'n5',
      type: NODE_TYPES.RANDOM_NUMBER,
      position: {
        x: 0, y: 200
      },
      data: {
        value: randomInteger()
      }
    },
    {
      id: 'n6',
      type: NODE_TYPES.DISPLAY,
      position: {
        x: 200, y: 400
      }
    }
  ]
}

export function getInitialEdges() {
  return [
    {
      id: 'n1-n2',
      source: 'n1',
      target: 'n2',
      // type: 'step',
      type: 'custom-edge',

      label: 'connects with',
      animated: true
    }
  ]  
}

