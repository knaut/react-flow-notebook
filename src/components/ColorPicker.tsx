import { useCallback, useState } from 'react'
import { css } from '@emotion/react'
import { Handle, Position, useReactFlow } from '@xyflow/react'
import { randomInteger } from '../utils'

// react color
import { Slider, Sketch, Material, Colorful, Compact, Circle, Swatch, Wheel, Block, Github, Chrome } from '@uiw/react-color';
import { Alpha, Hue, ShadeSlider, Saturation, hsvaToHslaString } from '@uiw/react-color';
import { EditableInput, EditableInputRGBA, EditableInputHSLA } from '@uiw/react-color';

export function ColorPicker({ id, value }) {
	const { updateNodeData } = useReactFlow()
	const [hex, setHex] = useState("#fff");

	const onColorChange = useCallback(color => {
		setHex(color.hex)
		updateNodeData(id, { value: color.hex })
	}, [])

	return (
		<div className="basic-node">
			<label>Color Picker</label>

			<Handle type="source" position={Position.Right} />
			<div className="nodrag">
				<Chrome
		      color={hex}
		      onChange={onColorChange}
		    />
		  </div>
			<div>{value}</div>
		</div>
	)
}
