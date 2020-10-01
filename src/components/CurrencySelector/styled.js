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
Wrapper.displayName = 'CurrencyWrapper'

export const SelectorContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 2px;

  svg {
    width: 30%;
    transform: ${({ isOpen }) => (isOpen ? 'none' : 'rotate(180deg)')};

    path {
      fill: ${colors.darkGray2};
    }
  }
`
SelectorContainer.displayName = 'SelectorContainer'

export const Selector = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-width: 0;
  font-size: 14px;
  background-color: transparent;
  cursor: pointer;
  color: ${colors.darkGray2};
  height: fit-content;

  &:focus {
    outline: none;
  }
`
Selector.displayName = 'Selector'

export const Label = styled.p`
  border-width: 0;
  font-size: 14px;
  background-color: transparent;
  color: ${colors.darkGray2};
  height: fit-content;
`
Label.displayName = 'SelectorLabel'
