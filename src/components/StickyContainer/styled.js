import styled from 'styled-components'

export const Wrapper = styled.div`
  min-height: ${(p) => `${p.height}px`};
  width: 100%;
`

export const Content = styled.div`
  position: ${(p) => (p.sticked ? 'fixed' : 'relative')};
  top: ${(p) => (p.sticked ? 0 : 'auto')};
  width: 100%;
  z-index: 1;
`
