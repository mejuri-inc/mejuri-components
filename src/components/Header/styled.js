import styled from 'styled-components'

export const Wrapper = styled.header`
  height: ${props => props.isDesktop ? '80px' : '60px'};
  width: 100%;
`
Wrapper.displayName = 'HeaderWrapper'

export const Content = styled.div`
  // position: fixed;
  width: 100%;
  z-index: 1;
`
Content.displayName = 'HeaderContent'
