import { useStore } from '../store/useStore'
import { sanitizeCssValue } from '../utils'

export function StatefulStyles({ id }) {
  const { theme } = useStore()
  const { nodeColor, midColor, edgeColor, nodeTextColor, nodeInputValue, mapBackground, mapDots } = theme

  return (
    <style type="text/css">{`

/* =====================
   Base / Global Styles
   ===================== */

body {
  background-color: ${sanitizeCssValue(nodeColor)};
  color: ${sanitizeCssValue(nodeTextColor)};
}

/* =====================
   Form Elements
   ===================== */

input[type="text"],
input[type="number"],
input[type="email"],
input[type="password"],
input[type="search"],
input[type="url"],
input[type="tel"],
input[type="date"],
input[type="time"],
input[type="datetime-local"],
textarea,
select {
  background: ${sanitizeCssValue(nodeColor)};
  border: 1px solid ${sanitizeCssValue(edgeColor)};
  color: ${sanitizeCssValue(nodeInputValue)};
}

input[type="text"]:hover,
input[type="number"]:hover,
input[type="email"]:hover,
input[type="password"]:hover,
input[type="search"]:hover,
input[type="url"]:hover,
input[type="tel"]:hover,
input[type="date"]:hover,
input[type="time"]:hover,
input[type="datetime-local"]:hover,
textarea:hover,
select:hover {
  border-color: color-mix(in lab, ${sanitizeCssValue(edgeColor)} 60%, black 50%);
}

input[type="text"]:focus,
input[type="number"]:focus,
input[type="email"]:focus,
input[type="password"]:focus,
input[type="search"]:focus,
input[type="url"]:focus,
input[type="tel"]:focus,
input[type="date"]:focus,
input[type="time"]:focus,
input[type="datetime-local"]:focus,
textarea:focus,
select:focus {
  border-color: ${sanitizeCssValue(edgeColor)} !important;
}

input::placeholder,
textarea::placeholder {
  color: ${sanitizeCssValue(edgeColor)};
}

/* Custom number input with visible spinners - opt-in class */
input[type="number"].show-spinners::-webkit-inner-spin-button,
input[type="number"].show-spinners::-webkit-outer-spin-button {
  background: ${sanitizeCssValue(midColor)};
}

select option {
  background: ${sanitizeCssValue(midColor)};
  color: ${sanitizeCssValue(nodeTextColor)};
}

/* Buttons */
button,
input[type="button"],
input[type="submit"],
input[type="reset"] {
  background: ${sanitizeCssValue(midColor)};
  border: 1px solid ${sanitizeCssValue(edgeColor)};
  color: ${sanitizeCssValue(nodeTextColor)};
}

button:hover,
input[type="button"]:hover,
input[type="submit"]:hover,
input[type="reset"]:hover {
  background: color-mix(in lab, ${sanitizeCssValue(edgeColor)} 60%, black 50%);
  border-color: color-mix(in lab, ${sanitizeCssValue(edgeColor)} 50%, black 20%);
}

button:active,
input[type="button"]:active,
input[type="submit"]:active,
input[type="reset"]:active {
  background: color-mix(in lab, ${sanitizeCssValue(edgeColor)} 50%, black 20%);
  color: ${sanitizeCssValue(nodeColor)};
}

/* Checkboxes and Radios */
input[type="checkbox"],
input[type="radio"] {
  background: ${sanitizeCssValue(nodeColor)};
  border: 1px solid ${sanitizeCssValue(edgeColor)};
}

input[type="checkbox"]:hover,
input[type="radio"]:hover {
  border-color: color-mix(in lab, ${sanitizeCssValue(edgeColor)} 60%, black 50%);
}

input[type="checkbox"]:checked,
input[type="radio"]:checked {
  background: color-mix(in lab, ${sanitizeCssValue(edgeColor)} 50%, black 20%);
  border-color: color-mix(in lab, ${sanitizeCssValue(edgeColor)} 50%, black 20%);
}

input[type="checkbox"]:checked::after {
  border: solid ${sanitizeCssValue(nodeColor)};
}

input[type="radio"]:checked::after {
  background: ${sanitizeCssValue(nodeColor)};
}

/* Range slider */
input[type="range"]::-webkit-slider-runnable-track {
  background: ${sanitizeCssValue(edgeColor)};
}

input[type="range"]::-webkit-slider-thumb {
  background: color-mix(in lab, ${sanitizeCssValue(edgeColor)} 50%, black 20%);
}

input[type="range"]::-webkit-slider-thumb:hover {
  background: ${sanitizeCssValue(nodeTextColor)};
}

input[type="range"]::-moz-range-track {
  background: ${sanitizeCssValue(edgeColor)};
}

input[type="range"]::-moz-range-thumb {
  background: color-mix(in lab, ${sanitizeCssValue(edgeColor)} 50%, black 20%);
}

input[type="range"]::-moz-range-thumb:hover {
  background: ${sanitizeCssValue(nodeTextColor)};
}

/* Labels */
label {
  color: ${sanitizeCssValue(nodeTextColor)};
}

/* Fieldset and Legend */
fieldset {
  border: 1px solid ${sanitizeCssValue(edgeColor)};
}

legend {
  color: color-mix(in lab, ${sanitizeCssValue(edgeColor)} 50%, black 20%);
}

/* =====================
   React Flow Theming
   ===================== */
svg pattern circle {
  fill: ${sanitizeCssValue(mapDots)} !important;
}

.react-flow {
  --xy-background-color: ${sanitizeCssValue(mapBackground)};

  /* Nodes */
  --xy-node-background-color: ${sanitizeCssValue(nodeColor)};
  --xy-node-background-color-default: ${sanitizeCssValue(nodeColor)};
  --xy-node-border: 1px solid ${sanitizeCssValue(edgeColor)};
  --xy-node-border-default: 1px solid ${sanitizeCssValue(edgeColor)};
  --xy-node-color: ${sanitizeCssValue(nodeTextColor)};
  --xy-node-color-default: ${sanitizeCssValue(nodeTextColor)};
  --xy-node-boxshadow-selected: 0 0 0 2px color-mix(in lab, ${sanitizeCssValue(edgeColor)} 50%, black 20%), 0 4px 12px rgba(0, 0, 0, 0.3);

  /* Handles */
  --xy-handle-background-color: color-mix(in lab, ${sanitizeCssValue(edgeColor)} 50%, black 20%);
  --xy-handle-border-color: ${sanitizeCssValue(nodeTextColor)};

  /* Edges */
  --xy-edge-stroke: color-mix(in lab, ${sanitizeCssValue(edgeColor)} 60%, black 50%);
  --xy-edge-stroke-default: color-mix(in lab, ${sanitizeCssValue(edgeColor)} 60%, black 50%);
  --xy-edge-stroke-selected: ${sanitizeCssValue(nodeTextColor)};

  /* Connection line */
  --xy-connectionline-stroke: color-mix(in lab, ${sanitizeCssValue(edgeColor)} 50%, black 20%);

  /* Minimap */
  --xy-minimap-background-color: ${sanitizeCssValue(midColor)};

  /* Controls */
  --xy-controls-button-background-color: ${sanitizeCssValue(midColor)};
  --xy-controls-button-background-color-hover: color-mix(in lab, ${sanitizeCssValue(edgeColor)} 60%, black 50%);
  --xy-controls-button-color: ${sanitizeCssValue(nodeTextColor)};
  --xy-controls-button-color-hover: ${sanitizeCssValue(nodeTextColor)};
  --xy-controls-button-border-color: color-mix(in lab, ${sanitizeCssValue(edgeColor)} 60%, black 50%);
}

/* Node classes */
.react-flow__node {
  color: ${sanitizeCssValue(nodeTextColor)};
  border-color: ${sanitizeCssValue(edgeColor)};
}

/* Handles */
.react-flow__handle {
  background: color-mix(in lab, ${sanitizeCssValue(edgeColor)} 50%, black 20%);
  border-color: ${sanitizeCssValue(nodeTextColor)};
}

.react-flow__handle-connecting {
  background: ${sanitizeCssValue(nodeTextColor)};
}

.react-flow__handle-valid {
  background: ${sanitizeCssValue(nodeTextColor)};
}

/* Edges */
.react-flow__edge-path {
  stroke: color-mix(in lab, ${sanitizeCssValue(edgeColor)} 60%, black 50%);
}

.react-flow__edge.selected .react-flow__edge-path,
.react-flow__edge:hover .react-flow__edge-path {
  stroke: ${sanitizeCssValue(nodeTextColor)};
}

/* Animated edges */
.react-flow__edge.animated path {
  stroke: color-mix(in lab, ${sanitizeCssValue(edgeColor)} 50%, black 20%);
}

/* Controls panel */
.react-flow__controls-button {
  background: ${sanitizeCssValue(midColor)};
  border-color: color-mix(in lab, ${sanitizeCssValue(edgeColor)} 60%, black 50%);
  color: ${sanitizeCssValue(nodeTextColor)};
  fill: ${sanitizeCssValue(nodeTextColor)};
}

.react-flow__controls-button:hover {
  background: color-mix(in lab, ${sanitizeCssValue(edgeColor)} 60%, black 50%);
}

.react-flow__controls-button svg {
  fill: ${sanitizeCssValue(nodeTextColor)};
}

/* MiniMap */
.react-flow__minimap {
  background: ${sanitizeCssValue(midColor)};
  border: 1px solid ${sanitizeCssValue(edgeColor)};
}

/* Custom node styling */
.basic-node {
  background: ${sanitizeCssValue(midColor)};
  border: 1px solid ${sanitizeCssValue(edgeColor)};
  color: ${sanitizeCssValue(nodeTextColor)};
}

/* Labels inside custom nodes */
.basic-node label {
  color: color-mix(in lab, ${sanitizeCssValue(nodeTextColor)} 90%, black 20%);
}

/* Inputs inside custom nodes */
.basic-node input,
.basic-node select,
.basic-node textarea {
  background: ${sanitizeCssValue(nodeColor)};
  border: 1px solid ${sanitizeCssValue(edgeColor)};
  color: ${sanitizeCssValue(nodeInputValue)};
}

    `}
    </style>
  )
}
