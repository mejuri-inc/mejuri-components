import styled from 'styled-components'

export const Wrapper = styled.section`
  background: transparent;
  display: none;
  height: 80px;
  width: 100%;

  @media only screen and (min-width: 990px) {
    display: initial;
  }
`
Wrapper.displayName = 'HeaderDesktopWrapper'

export const Content = styled.header`
  border-bottom: 1px solid ${(p) => p.theme.colors.whiteSmoke};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(p) => p.theme.colors.white};
  font-size: 12px;
  font-weight: ${(p) => p.theme.fontWeight.light};
  height: ${(p) => (p.shrinked ? '60px' : '80px')};
  letter-spacing: 1.2px;
  position: relative;
  transition: height 0.4s ease;
`
Content.displayName = 'HeaderDesktopContent'

export const Logo = styled.a`
  height: 58px;
  text-transform: uppercase;
  svg {
    height: 100%;
  }
  &:focus {
    outline: none;
  }
`
Logo.displayName = 'HeaderDesktopLogo'

export const Menu = styled.nav`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 16px;
  width: 50%;

  @media (min-width: 1280px) {
    width: 35%;
  }
`
Menu.displayName = 'HeaderDesktopMenu'

export const Item = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  margin-left: 45px;
`
Item.displayName = 'HeaderDesktopItem'

export const Overlay = styled.div`
  bottom: 0;
  display: ${(p) => (p.isVisible ? 'block' : 'none')};
  opacity: 0.5;
  height: 100%;
  left: 0;
  position: fixed;
  right: 0;
  top: 0%;
  width: 100%;
`

export const Button = styled.button`
  align-items: center;
  font-weight: 300;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  height: 40px;
  letter-spacing: 1px;
  text-transform: uppercase;
  background-color: ${(p) => p.theme.colors.white};
  border: none;

  &:focus,
  &:hover {
    color: ${(p) => p.theme.colors.grey};
    outline: none;

    svg {
      fill: ${(p) => p.theme.colors.grey};
    }
  }

  svg {
    height: 13px;
    width: 20px;
  }
`

export const ButtonLink = styled.a`
  display: block;
  line-height: 40px;
  padding: 5px;
  text-decoration: none;
  text-transform: uppercase;
  border: none;
  background-color: ${(p) => p.theme.colors.white};
  color: ${(p) => p.theme.colors.black};
  &:focus,
  &:hover {
    color: ${(p) => p.theme.colors.grey};
  }

  svg {
    fill: ${(p) => p.theme.colors.grey};
  }
`
