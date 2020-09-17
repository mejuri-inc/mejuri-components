import styled from 'styled-components'

export const Wrapper = styled.div`
  min-height: ${(p) => (p.height === 'auto' ? 'auto' : `${p.height}px`)};
  width: 100%;
`

export const Content = styled.div`
  position: ${(p) => (p.stick ? 'fixed' : 'relative')};
  top: 0;
  transition: top 0.5s ease;
  width: 100%;
  z-index: 11;
`
