import styled from 'styled-components'
import colors from 'styles/colors'

export const Wrapper = styled.div``
Wrapper.displayName = 'MobileMenuWrapper'

export const Overlay = styled.div`
  background: black;
  bottom: 0;
  display: ${(p) => (p.isOpen ? 'block' : 'none')};
  height: 100%;
  left: 0;
  opacity: ${(p) => (p.isOpen ? 0.5 : 0)};
  position: fixed;
  top: 0;
  visibility: ${(p) => (p.isOpen ? 'visible' : 'hidden')};
  width: 100%;
  z-index: 9999;
`
Overlay.displayName = 'MobileMenuOverlay'

export const NavigationPanel = styled.div`
  background: ${colors.white};
  display: flex;
  flex-direction: column;
  height: 100vh;
  left: 0;
  max-width: 400px;
  position: fixed;
  top: 0;
  transform: ${(p) => (p.isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.25s ease;
  width: 86vw;
  z-index: 9999;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
`
NavigationPanel.displayName = 'MobileMenuNavigationPanel'

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  position: relative;
  width: 50%;
  overflow: hidden;
`
Page.displayName = 'MobileMenuPage'

export const Pages = styled.div`
  display: flex;
  height: calc(100% - 60px);
  position: relative;
  transition: transform 0.25s ease;
  width: 200%;
  ${(p) => p.isOpen && 'transform: translateX(-50%);'};
`
Pages.displayName = 'MobileMenuPages'

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  margin: 0;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`
Options.displayName = 'MobileMenuOptions'

export const Footer = styled.ul`
  background: ${colors.lightGray3};
  list-style: none;
  margin: auto 0 0 0;
  padding: 0 25px;
  width: 100%;
  overflow-y: hidden;
  position: relative;
`
Footer.displayName = 'MobileMenuFooter'

export const FooterItem = styled.li`
  border-bottom: 1px solid ${colors.lightGray1};
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  padding: 22px 0;
  text-transform: uppercase;
  cursor: pointer;

  &:last-child {
    border: none;
  }
`
FooterItem.displayName = 'MobileMenuFooterItem'

export const FooterLink = styled.a`
  color: inherit;
  text-decoration: inherit;
`
FooterLink.displayName = 'MobileMenuFooterLink'

export const Account = styled(FooterItem)`
  display: flex;
  justify-content: space-between;
`
Account.displayName = 'MobileMenuAccount'
