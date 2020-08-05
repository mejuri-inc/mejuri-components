import styled from 'styled-components'

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
  background: ${(p) => p.theme.colors.white};
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
