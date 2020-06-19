import styled from 'styled-components'
import colors from 'styles/colors'

export const Wrapper = styled.div`
  margin-top: 6px;
`
Wrapper.displayName = 'Errors'

export const Error = styled.div`
  flex: 1;
  color: ${colors.error};
  line-height: 1.8;
`
Error.displayName = 'Error'
