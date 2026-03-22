import { NODE_TYPES, EDGE_TYPES, SEP } from './constants'
import * as themes from './themes'

export function sanitizeCssValue( string ) {
  if (string && string.startsWith('--')) {
    // is a css var
    return `var(${string})`
  } else {
    return string
  }
}

export function camelCaseToCapitalizeWithSpaces(camelCaseString) {
  const spacedString = camelCaseString.replace(/([a-z])([A-Z])/g, '$1 $2');

  const capitalizedString =
    spacedString.charAt(0).toUpperCase() + spacedString.slice(1);

  return capitalizedString;
}


export function randomInteger() {
	return Math.floor((Math.random() * 10) * (Math.random() * 100))
}

export function getInitialNodes() {
	return  [
		{
			id: `${NODE_TYPES.THEME_RENDERER}${SEP}1`,
			type: NODE_TYPES.THEME_RENDERER,
			position: {
				x: 1000, y: 300
			},
			data: {
				value: null
			}
		},
		{
			id: `${NODE_TYPES.THEME_PALETTE}${SEP}1`,
			type: NODE_TYPES.THEME_PALETTE,
			position: {
				x: 500, y: 300
			},
			data: {
				value: {
					// in future, this value should be made dynamic
					theme: {
						key: 'SciFi',
						palette: themes['SciFi']
					}
				}
			}
		},
		{
			id: `${NODE_TYPES.THEME_PALETTE}${SEP}2`,
			type: NODE_TYPES.THEME_PALETTE,
			position: {
				x: 500, y: 700
			},
			data: {
				value: {
					// in future, this value should be made dynamic
					theme: {
						key: 'Cappucino',
						palette: themes['Cappucino']
					}
				}
			}
		},
		{
			id: `${NODE_TYPES.TEXT_UPDATER}${SEP}1`,
			type: NODE_TYPES.TEXT_UPDATER,
			position: {
				x: 0, y: 0
			},
			data: {
				value: "Hello!"
			}
		},
		{
			id: `${NODE_TYPES.NUMBER_INPUT}${SEP}1`,
			type: NODE_TYPES.NUMBER_INPUT,
			position: {
				x: 0, y: 150
			},
			data: {
				value: 223
			}
		},
		{
			id: `${NODE_TYPES.RANDOM_NUMBER}${SEP}1`,
			type: NODE_TYPES.RANDOM_NUMBER,
			position: {
				x: 0, y: 300
			},
			data: {
				value: randomInteger()
			}
		},
		{
			id: `${NODE_TYPES.COMBINE}${SEP}1`,
			type: NODE_TYPES.COMBINE,
			position: {
				x: 400, y: 150
			},
			data: null
		},
		{
			id: `${NODE_TYPES.SWITCH}${SEP}1`,
			type: NODE_TYPES.SWITCH,
			position: {
				x: 400, y: -150
			},
			data: null
		},
		{
			id: `${NODE_TYPES.COLOR_PICKER}${SEP}1`,
			type: NODE_TYPES.COLOR_PICKER,
			position: {
				x: 0, y: 450
			},
			data: {
				value: 223
			}
		},
	]
}

function makeEdge(id1, id2, type) {
	return {
		id: `${id1}-${id2}`,
		source: id1,
		target: id2,
		type: type ? type : EDGE_TYPES.EXAMPLE_CUSTOM_EDGE
	}
}

export function getInitialEdges() {
	return [
		makeEdge(
			`${NODE_TYPES.NUMBER_INPUT}${SEP}1`,
			`${NODE_TYPES.SWITCH}${SEP}1`,
		),
		makeEdge(
			`${NODE_TYPES.SWITCH}${SEP}1`,
			`${NODE_TYPES.COMBINE}${SEP}1`,
		)
	]  
}

