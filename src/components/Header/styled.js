import styled from 'styled-components'

export const Wrapper = styled.header`
  height: 60px;
  width: 100%;
  @media only screen and (min-width: 880px) {
    height: 80px;
  }
`
Wrapper.displayName = 'HeaderWrapper'

export const Content = styled.div``
Content.displayName = 'HeaderContent'
