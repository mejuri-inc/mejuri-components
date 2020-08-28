import styled from 'styled-components'
import colors from 'styles/colors'

export const Wrapper = styled.div`
  align-items: center;
  padding: 0;
  overflow: hidden;
  display: flex;
  height: 18px;

  svg {
    height: 14px;
    width: 30px;
  }
`
Wrapper.displayName = 'FooterWrapper'

export const Selector = styled.select`
  border-width: 0;
  font-size: 14px;
  background-color: transparent;
  cursor: pointer;
  color: ${colors.darkGray1};
  height: fit-content;

  &:focus {
    outline: none;
  }
`
Selector.displayName = 'CurrencySelectorFooter'

export const Label = styled.p`
  border-width: 0;
  font-size: 14px;
  background-color: transparent;
  color: ${colors.darkGray1};
  height: fit-content;
`
Label.displayName = 'CurrencySelectorLabel'
