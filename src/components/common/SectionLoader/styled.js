import styled from 'styled-components/macro'
import { fadeIn, spinner } from 'styles/effects'

export const Content = styled.div`
  height: 100%;
`
Content.displayName = 'SectionLoaderContent'

export const Wrapper = styled.div`
  height: 100%;
  position: relative;
  width: 100%;
`
Wrapper.displayName = 'SectionLoaderWrapper'

export const Overlay = styled.div`
  ${fadeIn}
  align-items: center;
  background: rgba(255, 255, 255, 0.9);
  bottom: 0;
  display: flex;
  left: 0;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  right: 0;
  top: 0;
  z-index: 10000;
`
Overlay.displayName = 'SectionLoaderOverlay'

export const Spinner = styled.div`
  ${fadeIn}
  ${spinner({
    background: 'transparent',
    foreground: 'black',
    border: '4px',
    diameter: '60px'
  })}
`
Spinner.displayName = 'SectionLoaderSpinner'
