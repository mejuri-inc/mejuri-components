import styled from 'styled-components'

export const Header = styled.header`
  background: white;
  border-bottom: 1px solid #fafafa;
  box-shadow: 0 10px 5px 0 rgba(255, 255, 255, 0.75);
  display: flex;
  font-size: 14px;
  font-weight: 600;
  justify-content: space-between;
  padding: 25px 0;
  position: sticky;
  top: 0;
  z-index: 1;
`
Header.displayName = 'MobileMenuDriverHeader'

export const Options = styled.ul`
  border-bottom: 1px solid #fafafa;
  list-style: none;
  margin: 0;
  max-height: ${p => p.isOpen ? `${p.length * 42}px` : 0};
  padding: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, opacity 0.2s linear 0.2s;
  opacity: ${p => p.collapsed ? 0 : 1};
`
Options.displayName = 'MobileMenuDriverOptions'

export const Item = styled.li`
  font-size: 15px;
  font-weight: 300;
  letter-spacing: 0.5px;
  text-transform: none;
  padding-top: 22px;

  &:last-of-type {
    padding-bottom: 22px;
  }

  ${p => p.sub && `
    font-weight: 500;
    padding-top: 30px;
  `}

  & > a {
    text-decoration: none;
    color: black;
  }
`

// TODO: move to a common place.
export const PlusMinusToggle = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 16px;
  height: 16px;
  z-index: 2;
  cursor: pointer;

  &::before,
  &::after {
    content: '';
    position: absolute;
    height: 2px;
    width: 16px;
    background: #000;
    transition: transform 150ms ease;
  }

  &::after {
    transform-origin: center;
    transform: ${p => p.isOpen ? 'rotate(90deg)' : 'none'};
  }

  &::before {
    transform: ${p => p.isOpen ? 'rotate(180deg)' : 'none'};
  }
`

export const Menu = styled.div`
  font-weight: 500;
  letter-spacing: 1px;
  margin: 0 25px;
  text-transform: uppercase;
  padding: 0;
`
