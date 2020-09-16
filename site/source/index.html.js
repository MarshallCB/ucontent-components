import { html } from 'ucontent'
import externalComponent from 'external-component'
import internalComponent from '../internal-component'

export default html`
  <!doctype html>
  <html>
    <head>
      <title>Example</title>
      <style>
        body{
          line-height: 3;
        }
      </style>
    </head>
    <body>
      ${externalComponent({ text: "Test", color: "#00f" })}
      ${internalComponent({ text: "Test", color: "#00f" })}
    </body>
  </html>
`.toString()