import colors from '../styles/colors'
import { fontWeight } from '../styles/settings'
import { css } from 'styled-components'

const globals = css`
  a,
  button {
    transition: color 0.3s ease;
    svg {
      transition: fill 0.3s ease;
    }
  }
`

export default {
  globals,
  defaultSectionMaxWidth: '980px',
  colors,
  fontWeight
}
