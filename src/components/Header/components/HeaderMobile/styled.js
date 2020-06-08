import styled from 'styled-components'
import colors from 'styles/colors'

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.white};
  height: 60px;

  @media only screen and (min-width: 880px) {
    display: none;
  }
`
Wrapper.displayName = 'HeaderMobileWrapper'

export const Logo = styled.a`
  width: 160px;
  height: 58px;
  svg {
    height: 100%;
    width: inherit;
  }
`
Logo.displayName = 'HeaderMobileLogo'

export const Menu = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: flex-end;
  padding-right: 16px;
  width: 30%;
`
Menu.displayName = 'HeaderMobileMenu'

export const Button = styled.button`
  background: transparent;
  border: none;
  height: 40px;
  padding: 6px 8px 14px;
  width: 40px;
`
