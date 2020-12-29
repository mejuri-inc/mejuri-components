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
  font-weight: ${(p) => p.theme.fontWeight.regular};
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

export const BottomWrapper = styled.div`
  display: flex;
`

export const ButtonLink = styled.a`
  display: block;
  font-size: 14px;
  text-transform: none;
  text-decoration: underline;
  margin-left: auto;
  border: none;
  color: ${(p) => p.theme.colors.black};
  &:focus,
  &:hover {
    color: ${(p) => p.theme.colors.grey};
  }
`
