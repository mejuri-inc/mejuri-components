import styled from 'styled-components'
import { fadeIn, spinner } from '../../../styles/effects'

export const Spinner = styled.div`
  ${fadeIn}
  min-height: ${p => p.height || '100px'};
  ${p => spinner(p)}
`
Spinner.displayName = 'Spinner'

export default Spinner
