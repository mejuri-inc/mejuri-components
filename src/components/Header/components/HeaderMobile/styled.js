import styled from 'styled-components'
import colors from 'styles/colors'

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.white};
  height: 60px;
`
Wrapper.displayName = 'HeaderMobileWrapper'

export const Logo = styled.a`
  width: 160px;
  height: 58px;
  svg {
    height: 100%;
  }
`
Logo.displayName = 'HeaderMobileLogo'

export const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 40px;
  width: 30%;
  height: 100%;

  & > div,
  & > button {
    padding-left: 20px;
  }
`
Menu.displayName = 'HeaderMobileMenu'
