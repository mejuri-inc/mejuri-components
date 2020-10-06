import styled from 'styled-components'
import LogoSvg from 'resources/icons/Logo'

export const MejuriLogo = styled(LogoSvg)`
  width: fit-content;
  height: 100%;
  &:hover {
    fill: inherit;
  }
`

export const Logo = styled.a`
  height: ${({ shrinked }) => (shrinked ? '45px' : '58px')};
  text-transform: uppercase;
  text-align: center;
  flex-basis: 56%;

  @media (max-width: 1200px) {
    flex-basis: 33.3%;
  }
`

export const Wrapper = styled.section`
  background: transparent;
  display: none;
  height: 80px;

  /* Fixes button inherited line-height in pdp */
  button {
    line-height: inherit;
  }

  @media only screen and (min-width: 990px) {
    display: block;
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
  height: ${(p) => (p.shrinked ? '51px' : '80px')};
  letter-spacing: 1px;
  line-height: 1.5;
  position: relative;
  transition: height 0.4s ease;
  padding: 0 30px;
`
Content.displayName = 'HeaderDesktopContent'

export const Menu = styled.nav`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-column-gap: 45px;
  justify-content: flex-end;
  white-space: nowrap;
  flex-basis: 33.3%;

  @media (min-width: 1200px) {
    flex-basis: 22%;
  }

  svg {
    margin-right: 8px;
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
  padding: 0px;

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
