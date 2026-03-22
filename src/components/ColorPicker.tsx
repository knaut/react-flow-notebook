import { useCallback, useState, useEffect, useMemo } from 'react'
import { css } from '@emotion/react'
import { Handle, Position, useReactFlow } from '@xyflow/react'
import { randomInteger } from '../utils'

// react color
import { Slider, Sketch, Material, Colorful, Compact, Circle, Swatch, Wheel, Block, Github, Chrome } from '@uiw/react-color';
import { Alpha, Hue, ShadeSlider, Saturation, hsvaToHslaString } from '@uiw/react-color';
import { EditableInput, EditableInputRGBA, EditableInputHSLA } from '@uiw/react-color';

import { DropdownMenu } from 'radix-ui'

import throttle from 'lodash/throttle';

export function ColorPicker({ id, data }) {
	const { updateNodeData } = useReactFlow()
	const [hex, setHex] = useState(data.value);
	const [throttledValue, setThrottledValue] = useState('');

	const updateThrottledValue = useMemo(
    () =>
      throttle((value) => {
        setThrottledValue(value);
        console.log('API call or expensive operation with:', value);
      }, 100), // Throttle time in milliseconds
    []
  );

	const onColorChange = useCallback(color => {
		console.log('onColorChange')
		setHex(color.hex)
		updateThrottledValue(color.hex)
	}, [])

	useEffect(() => {
		updateNodeData(id, { value: hex })
	}, [])

	useEffect(() => {
		updateNodeData(id, { value: hex })
	}, [throttledValue])

	return (
		<div className="basic-node" css={css`min-width: 80px !important;`}>
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
			<div>{data.value}</div>
		</div>
	)
}
