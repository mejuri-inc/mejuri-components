import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 60px;
  width: 100%;

  @media screen and (min-width: 990px) {
    height: 80px;
  }
`
Wrapper.displayName = 'HeaderWrapper'

export const Content = styled.div``
Content.displayName = 'HeaderContent'
