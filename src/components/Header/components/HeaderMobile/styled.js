import styled from 'styled-components'
import colors from 'styles/colors'

export const Wrapper = styled.header`
  border-bottom: 1px solid ${colors.whiteSmoke};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.white};
  height: 60px;

  @media only screen and (min-width: 990px) {
    display: none;
  }
`
Wrapper.displayName = 'HeaderMobileWrapper'

export const Logo = styled.a`
  width: 28%;
  height: 58px;
  svg {
    height: 100%;
  }
`
Logo.displayName = 'HeaderMobileLogo'

export const Menu = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: flex-end;
  padding-right: 8px;
  width: 30%;
`
Menu.displayName = 'HeaderMobileMenu'

export const Button = styled.button`
  background: transparent;
  border: none;
  height: 40px;
  width: 40px;
  padding: 0 3px;
  svg {
    height: 18px;
    width: 18px;
  }
`
