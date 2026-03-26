# React Flow Notebook
A lab repo to develop new features in React Flow, prototype ideas, and experiment. 🧪

React Flow is a library for creating [patch-and-connector style UIs in React](https://reactflow.dev/).

https://github.com/user-attachments/assets/8e9685dd-5e3f-41cd-8c02-f2b9bbd6d2d9

## What does this project do?
Connect nodes together to gracefully compute different types of values in realtime. Currently supported types are **numbers, strings, colors, and color palettes**. 

We also demonstrate how the flow graph can manipulate the global state of the application with on-the-fly color schemes.

Current nodes include:
| Node | Description | Inputs | Outputs |
| --- | --- | --- | --- |
| Text | A simple text node | N/A | string |
| Number Input | A simple number node | N/A | Integer |
| Random Number | Rolls a random number | N/A | Integer |
| Combiner | Combines different input types together for easy display | Any | N/A |
| Color Picker | Spawns a Radix color picker | N/A | Color HEX |
| Switch | Accepts any number of togglable inputs/outputs | Any | Any |
| Combiner | Displays any number of inputs gracefully | Any | N/A |
| Theme Palette | Accepts color inputs and outputs them as a theme group. CSS variables supported. | Colors | Color Theme |
| Theme Renderer | Accepts a color theme and colorizes the UI | Color Theme | N/A |

## How do I run it?
Clone/download the repo. Run `npm install`. Once dependencies are installed, run `npm run dev`. Vite should automatically open a browser at `http://localhost:5173`

## Tools and strategies?
- React Flow - graph and node computational UI
- Zustand - global client-side state management for theme color manipulation
- Radix - out-of-box UI elements like color pickers, etc
- Vite - bundling and scaffolding

The nodes compute their inputs in a resilient fashion; that is, any kind of input can be connected, but only the *correct* type will be used. In the case of the Combiner, it will gracefully concatenate strings, but do math operations on numbers.

The Theme Renderer takes its color theme input and renders an inline stylesheet in a React Portal, leveraging a CSS-in-JS approach. Color values are rendered in realtime. We do some minor throttling of color input changes for performance and stability.

## Roadmap
Prototype more complex features like real-time protocol manipulation: HTTP, extenal APIs, EventStreams, etc. Data visualization nodes, and API sender nodes.

Inspirations: Node-RED, Quartz Composer, TouchDesigner, DaVinci Fusion, etc.

