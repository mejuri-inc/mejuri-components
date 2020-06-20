import styled, { createGlobalStyle } from 'styled-components'
import { fadeIn, fadeOut, slideIn } from 'styles/effects'

export const GlobalStyle = createGlobalStyle`
  .--noscroll {
    overflow: hidden;
  }
`
GlobalStyle.displayName = 'NoScrollStyle'

const zindex = 1000

export const Wrapper = styled.div`
  ${(props) => props.closing && fadeOut}
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  z-index: ${zindex};
`
Wrapper.displayName = 'PopupWrapper'

export const Backdrop = styled.div`
  ${fadeIn}
  background: rgba(0, 0, 0, 0.75);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${zindex + 1};
`
Backdrop.displayName = 'PopupBackdrop'

export const Content = styled.div`
  ${slideIn}
  background: white;
  margin: auto;
  max-width: 570px;
  overflow: hidden;
  position: relative;
  width: 100%;
  padding: 20px;
  z-index: ${zindex + 2};
`
Content.displayName = 'PopupContent'

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 10px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: all 0.1s ease;

  &:hover {
    opacity: 0.6;
  }
`
CloseButton.displayName = 'PopupXButton'
