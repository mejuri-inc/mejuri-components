import styled from 'styled-components'
import colors from 'styles/colors'
import { fontWeight } from 'styles/settings'

export const Wrapper = styled.section`
  background: transparent;
  display: none;
  height: 80px;
  width: 100%;

  @media only screen and (min-width: 880px) {
    display: initial;
  }
`
Wrapper.displayName = 'HeaderDesktopWrapper'

export const Content = styled.header`
  border-bottom: 1px solid ${colors.whiteSmoke};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.white};
  font-size: 12px;
  font-weight: ${fontWeight.light};
  height: ${(p) => (p.shrinked ? '60px' : '80px')};
  letter-spacing: 1.2px;
  position: relative;
  text-transform: uppercase;
  transition: height 0.4s ease;
`
Content.displayName = 'HeaderDesktopContent'

export const Logo = styled.a`
  width: 180px;
  height: 58px;
  svg {
    height: 100%;
  }
`
Logo.displayName = 'HeaderDesktopLogo'

export const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 35%;
  height: 100%;
  padding-right: 16px;
  padding-left: 30px;
  justify-content: space-around;
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
Overlay.displayName = 'HeaderDesktopOverlay'

export const Button = styled.button`
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  height: 40px;
  justify-content: space-between;
  letter-spacing: 1px;
  padding: 5px;
  width: 95px;
  text-transform: uppercase;

  svg {
    height: 24px;
  }
`

export const ButtonLink = styled.a`
  align-items: center;
  display: flex;
  height: 40px;
  padding: 5px;
  text-decoration: none;
  min-width: 70px;
`
