import { html } from 'ucontent'

export default ({ color, text }) => html`
  <div style=${`background-color: ${color}`}>
    ${text}
  </div>
`