import styled from 'styled-components'
import colors from 'styles/colors'
import FormError from '../FormError'

export const Wrapper = styled.div`
  width: 100%;

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    appearance: none;
    margin: 0;
  }
`
Wrapper.displayName = 'FormControlWrapper'

export const Control = styled.div`
  ${({ splitted }) => splitted && `display: flex;`}
`
Control.displayName = 'Control'

export const Info = styled.div`
  display: flex;
  flex-direction: row-reverse;
`
Info.displayName = 'Info'

export const Error = styled(FormError)`
  flex: 1;
`
Error.displayName = 'Error'

export const Counter = styled.div`
  white-space: nowrap;
  color: ${colors.darkGray1};
  font-size: 12px;
  line-height: 18px;
  text-align: right;
  margin-left: 10px;
`

Counter.displayName = 'Counter'
