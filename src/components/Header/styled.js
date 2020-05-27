import styled from 'styled-components'

export const Wrapper = styled.header`
  height: ${(props) => (props.isDesktop ? '80px' : '60px')};
  width: 100%;
`
Wrapper.displayName = 'HeaderWrapper'

export const Content = styled.div``
Content.displayName = 'HeaderContent'
