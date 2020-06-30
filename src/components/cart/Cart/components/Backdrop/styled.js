import styled, { createGlobalStyle } from 'styled-components'
import { fadeIn } from 'styles/effects'

export const GlobalStyle = createGlobalStyle`
  .--noscroll {
    overflow: hidden;
  }
`
GlobalStyle.displayName = 'NoScrollStyle'

export const Wrapper = styled.div`
  ${fadeIn}
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.25s ease, visibility 0.1s;
  z-index: 2;
`
Wrapper.displayName = 'CartBackdrop'
