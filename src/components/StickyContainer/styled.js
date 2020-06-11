import styled from 'styled-components'

export const Wrapper = styled.div`
  min-height: ${(p) => `${p.height}px`};
  width: 100%;
`

export const Content = styled.div`
  position: ${(p) => (p.sticked ? 'fixed' : 'relative')};
  top: 0;
  width: 100%;
`
