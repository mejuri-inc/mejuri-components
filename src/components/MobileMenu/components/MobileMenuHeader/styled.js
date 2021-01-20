import styled from 'styled-components'

export const Header = styled.header`
  align-items: center;
  background: ${(p) => p.theme.colors.white};
  border-bottom: 1px solid ${(p) => p.theme.colors.lightGray1};
  display: flex;
  height: 60px;
  justify-content: flex-end;
  padding: 0 24px;
`

export const GoBack = styled.div`
  margin-left: auto;
  cursor: pointer;
  padding-right: 2px;
`

export const ArrowIcon = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  height: 28px;
  padding: 0;
  width: 28px;
`

export const ButtonLink = styled.a`
  display: block;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0;
  text-transform: none;
  text-decoration: underline;
  border: none;
  color: ${(p) => p.theme.colors.black};
  &:focus,
  &:hover {
    color: ${(p) => p.theme.colors.grey};
  }
`
