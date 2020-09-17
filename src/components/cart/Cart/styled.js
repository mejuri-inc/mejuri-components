import styled from 'styled-components'
import colors from 'styles/colors'
import { fontWeight } from 'styles/settings'

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
`

export const Wrapper = styled.div`
  z-index: 11;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  max-width: 450px;
  height: 100%;
  background-color: ${colors.white};
  border-left: 1px solid rgba(0, 0, 0, 0.5);
  overflow: auto;
  transform: translateX(100%);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease, transform 0.35s 0s;

  ${({ isOpened }) =>
    isOpened &&
    `
    transform: translateX(0);
    opacity: 1;
    pointer-events: all;
  `}
`
Wrapper.displayName = 'CartWrapper'

export const BlockWrapper = styled.div`
  align-self: flex-end;
  border-top: 1px solid ${colors.lightGray2};
  padding: 15px 30px 25px 30px;
`
BlockWrapper.displayName = 'CartBlockWrapper'

export const EmptyCart = styled.div`
  font-size: 15px;
  font-style: italic;
  font-weight: ${fontWeight.light};
  padding: 50px 30px;
`
EmptyCart.displayName = 'CartEmptyCart'

export const Scrollable = styled.div`
  overflow-y: auto;
`
Scrollable.displayName = 'CartScrollable'

export const BottomWrapper = styled.div`
  margin-top: auto;
`
BottomWrapper.displayName = 'CartBottomWrapper'
