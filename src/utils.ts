import { NODE_TYPES, EDGE_TYPES } from './constants'

export function randomInteger() {
	return Math.floor((Math.random() * 10) * (Math.random() * 100))
}

export function getInitialNodes() {
	return  [
		{
			id: `${NODE_TYPES.TEXT_UPDATER}-1`,
			type: NODE_TYPES.TEXT_UPDATER,
			position: {
				x: 0, y: 0
			},
			data: {
				value: "Hello!"
			}
		},
		{
			id: `${NODE_TYPES.NUMBER_INPUT}-1`,
			type: NODE_TYPES.NUMBER_INPUT,
			position: {
				x: 0, y: 150
			},
			data: {
				value: 223
			}
		},
		{
			id: `${NODE_TYPES.RANDOM_NUMBER}-1`,
			type: NODE_TYPES.RANDOM_NUMBER,
			position: {
				x: 0, y: 300
			},
			data: {
				value: randomInteger()
			}
		},
		{
			id: `${NODE_TYPES.COMBINE}-1`,
			type: NODE_TYPES.COMBINE,
			position: {
				x: 400, y: 150
			}
		},
		{
			id: `${NODE_TYPES.SWITCH}-1`,
			type: NODE_TYPES.SWITCH,
			position: {
				x: 400, y: -150
			}
		}
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
			`${NODE_TYPES.NUMBER_INPUT}-1`,
			`${NODE_TYPES.SWITCH}-1`,
		),
		makeEdge(
			`${NODE_TYPES.SWITCH}-1`,
			`${NODE_TYPES.COMBINE}-1`,
		)
	]  
}

