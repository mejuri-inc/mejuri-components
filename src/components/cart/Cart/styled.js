import styled from 'styled-components'
import colors from '../../../styles/colors'
import { fontWeight } from '../../../styles/settings'
import { fadeIn } from '../../../styles/effects'

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
`

export const Wrapper = styled.div`
  z-index: 2;
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
  visibility: hidden;
  transition: opacity 0.1s ease, transform 0.25s 0s;
  ${({ isOpened }) => isOpened && `
    transform: translateX(0);
    visibility: visible;
    opacity: 1;
    pointer-events: all;
  `}
`
Wrapper.displayName = 'CartWrapper'

export const Backdrop = styled.div`
  ${fadeIn}
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.25s ease, visibility 0.1s;
`
Backdrop.displayName = 'CartBackdrop'

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
