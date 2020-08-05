import styled from 'styled-components'

export const Footer = styled.ul`
  background: ${(p) => p.theme.colors.lightGray3};
  list-style: none;
  margin: auto 0 0 0;
  padding: 0 25px;
  width: 100%;
`

export const FooterItem = styled.li`
  border-bottom: 1px solid ${(p) => p.theme.colors.lightGray1};
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
