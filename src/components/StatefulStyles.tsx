import { useEffect } from 'react'
import { useStore } from '../store/useStore'
import { sanitizeCssValue } from '../utils'

export function StatefulStyles({ id }) {
  const { theme, setTheme } = useStore()
  console.log(theme)
  const { nodeColor, midColor, edgeColor, edgeControlColor, nodeTextColor, nodeInputValue, mapBackground, mapDots } = theme

  return (
    <style type="text/css">{`

/* =====================
   Base / Global Styles
   ===================== */

body {
  margin: 0;
  background-color: ${sanitizeCssValue(nodeColor)};
  font-family: var(--font-mono);
  font-size: 14px;
  color: ${sanitizeCssValue(nodeTextColor)};
  line-height: 1.5;

  
}

/* =====================
   Form Elements
   ===================== */

/* Text inputs, textareas, selects */
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
  font-family: var(--font-mono);
  font-size: 14px;
  background: ${sanitizeCssValue(nodeColor)};
  border: 1px solid ${sanitizeCssValue(edgeColor)};
  border-radius: 4px;
  padding: 8px 12px;
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
  outline: none !important;
  box-shadow: none !important;
  border-color: ${sanitizeCssValue(edgeColor)} !important;
      
}

input::placeholder,
textarea::placeholder {
  color: ${sanitizeCssValue(edgeColor)};
  opacity: 1;
      
}

/* Number input spinners (webkit) */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  appearance: none;
  margin: 0;
}

/* Custom number input with visible spinners - opt-in class */
input[type="number"].show-spinners::-webkit-inner-spin-button,
input[type="number"].show-spinners::-webkit-outer-spin-button {
  appearance: auto;
  opacity: 1;
  background: ${sanitizeCssValue(midColor)};
  cursor: pointer;
      
}

/* Firefox number input */
input[type="number"] {
  -moz-appearance: textfield;
}

input[type="number"].show-spinners {
  -moz-appearance: number-input;
}

/* Select dropdown arrow */
select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%2373BF50' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 10px center;
  padding-right: 32px;
  cursor: pointer;
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
  font-family: var(--font-mono);
  font-size: 14px;
  background: ${sanitizeCssValue(midColor)};
  border: 1px solid ${sanitizeCssValue(edgeColor)};
  border-radius: 4px;
  padding: 8px 16px;
  color: ${sanitizeCssValue(nodeTextColor)};
  cursor: pointer;
  
}

button:hover,
input[type="button"]:hover,
input[type="submit"]:hover,
input[type="reset"]:hover {
  background: color-mix(in lab, ${sanitizeCssValue(edgeColor)} 60%, black 50%);
  border-color: color-mix(in lab, ${sanitizeCssValue(edgeColor)} 50%, black 20%);
      
}

button:focus,
input[type="button"]:focus,
input[type="submit"]:focus,
input[type="reset"]:focus {
  outline: none;
}

button:active,
input[type="button"]:active,
input[type="submit"]:active,
input[type="reset"]:active {
  background: color-mix(in lab, ${sanitizeCssValue(edgeColor)} 50%, black 20%);
  color: ${sanitizeCssValue(nodeColor)};
        
}

button:disabled,
input:disabled,
select:disabled,
textarea:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Checkboxes and Radios */
input[type="checkbox"],
input[type="radio"] {
  appearance: none;
  width: 18px;
  height: 18px;
  background: ${sanitizeCssValue(nodeColor)};
  border: 1px solid ${sanitizeCssValue(edgeColor)};
  cursor: pointer;
  vertical-align: middle;
  position: relative;
  
}

input[type="checkbox"] {
  border-radius: 4px;
}

input[type="radio"] {
  border-radius: 50%;
}

input[type="checkbox"]:hover,
input[type="radio"]:hover {
  border-color: color-mix(in lab, ${sanitizeCssValue(edgeColor)} 60%, black 50%);
      
}

input[type="checkbox"]:focus,
input[type="radio"]:focus {
  outline: none;
}

input[type="checkbox"]:checked,
input[type="radio"]:checked {
  background: color-mix(in lab, ${sanitizeCssValue(edgeColor)} 50%, black 20%);
  border-color: color-mix(in lab, ${sanitizeCssValue(edgeColor)} 50%, black 20%);
      
}

input[type="checkbox"]:checked::after {
  content: '';
  position: absolute;
  left: 5px;
  top: 2px;
  width: 5px;
  height: 9px;
  border: solid ${sanitizeCssValue(nodeColor)};
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
        
}

input[type="radio"]:checked::after {
  content: '';
  position: absolute;
  left: 5px;
  top: 5px;
  width: 6px;
  height: 6px;
  background: ${sanitizeCssValue(nodeColor)};
        
  border-radius: 50%;
}

/* Range slider */
input[type="range"] {
  appearance: none;
  background: transparent;
  cursor: pointer;
  height: 20px;
}

input[type="range"]::-webkit-slider-runnable-track {
  background: ${sanitizeCssValue(edgeColor)};
  height: 6px;
  border-radius: 3px;
}

input[type="range"]::-webkit-slider-thumb {
  appearance: none;
  width: 16px;
  height: 16px;
  background: color-mix(in lab, ${sanitizeCssValue(edgeColor)} 50%, black 20%);
  border-radius: 50%;
  margin-top: -5px;
  
}

input[type="range"]::-webkit-slider-thumb:hover {
  background: ${sanitizeCssValue(nodeTextColor)};
      
}

input[type="range"]::-moz-range-track {
  background: ${sanitizeCssValue(edgeColor)};
      
  height: 6px;
  border-radius: 3px;
}

input[type="range"]::-moz-range-thumb {
  width: 16px;
  height: 16px;
  background: color-mix(in lab, ${sanitizeCssValue(edgeColor)} 50%, black 20%);
  border: none;
  border-radius: 50%;
}

input[type="range"]::-moz-range-thumb:hover {
  background: ${sanitizeCssValue(nodeTextColor)};
      
}

input[type="range"]:focus {
  outline: none !important;
  box-shadow: none !important;
}

/* Labels */
label {
  color: ${sanitizeCssValue(nodeTextColor)};
      
  font-family: var(--font-mono);
  cursor: pointer;
}

/* Fieldset and Legend */
fieldset {
  border: 1px solid ${sanitizeCssValue(edgeColor)};
      
  border-radius: 6px;
  padding: 16px;
  margin: 0 0 16px 0;
}

legend {
  color: color-mix(in lab, ${sanitizeCssValue(edgeColor)} 50%, black 20%);
  font-family: var(--font-mono);
  padding: 0 8px;
      
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
  --xy-node-border-radius: 6px;
  --xy-node-border: 1px solid ${sanitizeCssValue(edgeColor)};
  --xy-node-border-default: 1px solid ${sanitizeCssValue(edgeColor)};
  --xy-node-color: ${sanitizeCssValue(nodeTextColor)};
  --xy-node-color-default: ${sanitizeCssValue(nodeTextColor)};
  --xy-node-boxshadow-hover: 0 4px 12px rgba(0, 0, 0, 0.3);
  --xy-node-boxshadow-selected: 0 0 0 2px color-mix(in lab, ${sanitizeCssValue(edgeColor)} 50%, black 20%), 0 4px 12px rgba(0, 0, 0, 0.3);

  /* Handles */
  --xy-handle-background-color: color-mix(in lab, ${sanitizeCssValue(edgeColor)} 50%, black 20%);
  --xy-handle-border-color: ${sanitizeCssValue(nodeTextColor)};

  /* Edges */
  --xy-edge-stroke: color-mix(in lab, ${sanitizeCssValue(edgeColor)} 60%, black 50%);
  --xy-edge-stroke-default: color-mix(in lab, ${sanitizeCssValue(edgeColor)} 60%, black 50%);
  --xy-edge-stroke-selected: ${sanitizeCssValue(nodeTextColor)};
  --xy-edge-stroke-width: 2px;
  --xy-edge-stroke-width-default: 2px;

  /* Connection line */
  --xy-connectionline-stroke: color-mix(in lab, ${sanitizeCssValue(edgeColor)} 50%, black 20%);
  --xy-connectionline-stroke-width: 2px;

  /* Attribution (hide or style) */
  --xy-attribution-background-color: transparent;

  /* Minimap */
  --xy-minimap-background-color: ${sanitizeCssValue(midColor)};
  --xy-minimap-mask-background-color: rgba(29, 7, 38, 0.7);

  /* Controls */
  --xy-controls-button-background-color: ${sanitizeCssValue(midColor)};
  --xy-controls-button-background-color-hover: color-mix(in lab, ${sanitizeCssValue(edgeColor)} 60%, black 50%);
  --xy-controls-button-color: ${sanitizeCssValue(nodeTextColor)};
  --xy-controls-button-color-hover: ${sanitizeCssValue(nodeTextColor)};
  --xy-controls-button-border-color: color-mix(in lab, ${sanitizeCssValue(edgeColor)} 60%, black 50%);
}

/* Background dots */
.react-flow__background pattern circle {
  fill: #232229;
}

/* Node classes */
.react-flow__node {
  font-family: var(--font-mono);
  color: ${sanitizeCssValue(nodeTextColor)};
  border-color: ${sanitizeCssValue(edgeColor)};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
      
}

.react-flow__node.selected {
  /*box-shadow: 0 0 0 2px color-mix(in lab, ${sanitizeCssValue(edgeColor)} 50%, black 20%), 0 4px 12px rgba(0, 0, 0, 0.3);*/
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

.react-flow__edge-text {
  font-family: var(--font-mono);
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
.react-flow__controls {
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
}

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
  border-radius: 8px;
  opacity: 0.75;
  overflow: hidden;
      
}

/* Custom node styling */
.basic-node {
  font-family: var(--font-mono);
  font-size: 12px;
  background: ${sanitizeCssValue(midColor)};
  border: 1px solid ${sanitizeCssValue(edgeColor)};
  border-radius: 6px;
  padding: 10px 12px;
  color: ${sanitizeCssValue(nodeTextColor)};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  min-width: 150px;
      
}

/* Spacing for elements inside custom nodes */
.basic-node > * + * {
  margin-top: 8px;
}

/* Labels inside custom nodes */
.basic-node label {
  display: block;
  margin-bottom: 4px;
  font-size: 11px;
  color: color-mix(in lab, ${sanitizeCssValue(edgeColor)} 50%, black 20%);
}

/* Inputs inside custom nodes */
.basic-node input,
.basic-node select,
.basic-node textarea {
  width: 100%;
  box-sizing: border-box;
  background: ${sanitizeCssValue(nodeColor)};
        
  border: 1px solid ${sanitizeCssValue(edgeColor)};
  color: ${sanitizeCssValue(nodeInputValue)};
  font-family: var(--font-mono);
  border-radius: 4px;
  padding: 6px 8px;
  font-size: 12px;
      
}

.basic-node input:focus,
.basic-node select:focus,
.basic-node textarea:focus {
  outline: none;
}

/* Buttons inside custom nodes */
.basic-node button {
  width: 100%;
  padding: 6px 10px;
  font-size: 11px;
}






/* React Color dark mode */
/* for reasons having to do with radix popover, we will only support 
dark mode for now (radix popover changes the DOM organization
and thus the style cascade) */
/*[data-color-mode*='dark'] .w-color-sketch {*/
.w-color-sketch { 
  --sketch-background: #323232 !important;
}

/*[data-color-mode*='dark'] .w-color-swatch {*/
.w-color-swatch { 
  --sketch-swatch-border-top: 1px solid #525252 !important;
}

/*[data-color-mode*='dark'] .w-color-block {*/
.w-color-block {  
  --block-background-color: #323232 !important;
  --block-box-shadow: rgb(0 0 0 / 10%) 0 1px !important;
}

/*[data-color-mode*='dark'] .w-color-editable-input {*/
.w-color-editable-input { 
  --editable-input-label-color: #757575 !important;
  --editable-input-box-shadow: #616161 0px 0px 0px 1px inset !important;
  --editable-input-color: #bbb !important;
}

/*[data-color-mode*='dark'] .w-color-github {*/
.w-color-github { 
  --github-border: 1px solid rgba(0, 0, 0, 0.2) !important;
  --github-background-color: #323232 !important;
  --github-box-shadow: rgb(0 0 0 / 15%) 0px 3px 12px !important;
  --github-arrow-border-color: rgba(0, 0, 0, 0.15) !important;
}

/*[data-color-mode*='dark'] .w-color-compact {*/
.w-color-compact {  
  --compact-background-color: #323232 !important;
}

/*[data-color-mode*='dark'] .w-color-material {*/
.w-color-material { 
  --material-background-color: #323232 !important;
  --material-border-bottom-color: #707070 !important;
}

/*[data-color-mode*='dark'] .w-color-alpha {*/
.w-color-alpha {  
  --alpha-pointer-background-color: #6a6a6a !important;
  --alpha-pointer-box-shadow: rgb(0 0 0 / 37%) 0px 1px 4px 0px !important;
}

      `}
    </style>
  )
}
