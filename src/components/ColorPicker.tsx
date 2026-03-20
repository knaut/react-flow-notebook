import { useCallback, useState } from 'react'
import { css } from '@emotion/react'
import { Handle, Position, useReactFlow } from '@xyflow/react'
import { randomInteger } from '../utils'

export function ColorPicker({ id, value }) {
	return (
		<div className="basic-node">
			<label>Color Picker</label>
			
			<Handle type="target" position={Position.Right} />
			<div>{value}</div>
		</div>
	)
}
