import { useCallback, useState, useEffect } from 'react'
import { css } from '@emotion/react'
import { Handle, Position, useReactFlow } from '@xyflow/react'
import { randomInteger } from '../utils'

// react color
import { Slider, Sketch, Material, Colorful, Compact, Circle, Swatch, Wheel, Block, Github, Chrome } from '@uiw/react-color';
import { Alpha, Hue, ShadeSlider, Saturation, hsvaToHslaString } from '@uiw/react-color';
import { EditableInput, EditableInputRGBA, EditableInputHSLA } from '@uiw/react-color';

import { DropdownMenu } from 'radix-ui'

export function ColorPicker({ id, value }) {
	const { updateNodeData } = useReactFlow()
	const [hex, setHex] = useState("#fff" || value);

	const onColorChange = useCallback(color => {
		setHex(color.hex)
		updateNodeData(id, { value: color.hex })
	}, [])

	useEffect(() => {
		updateNodeData(id, { value: hex})
	}, [])

	return (
		<div className="basic-node">
			<label>Color Picker</label>

			<Handle type="source" position={Position.Right} />
			<div className="nodrag">
				<DropdownMenu.Root>
					<DropdownMenu.Trigger asChild>
						<button css={css`
								padding: 4px !important;
							`}>
							<div css={css`
								background: ${hex};
								height: 30px;
								width: 100%;
								border-radius: 3px;
							`}>
								<span css={css`display:none`}>Color</span>
							</div>
						</button>
				  </DropdownMenu.Trigger>

				  <DropdownMenu.Portal>
				  	<DropdownMenu.Content>
				  		<Chrome
					      color={hex}
					      onChange={onColorChange}
					    />
				  	</DropdownMenu.Content>
				  </DropdownMenu.Portal>
			  </DropdownMenu.Root>
		  </div>
			<div>{value}</div>
		</div>
	)
}
