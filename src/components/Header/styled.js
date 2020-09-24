import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 60px;
  width: 100%;

  @media screen and (min-width: 990px) {
    height: 80px;
  }
`
Wrapper.displayName = 'HeaderWrapper'

export const Sticky = styled.div`
  position: sticky;
  top: 0;
  z-index: 2;
`
