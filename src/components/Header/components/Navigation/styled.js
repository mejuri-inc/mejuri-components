import styled from 'styled-components'
import colors from 'styles/colors'
import { fadeIn } from 'styles/effects'

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  padding: 0;

  @media (min-width: 1280px) {
    width: 35%;
  }
`
Wrapper.displayName = 'WrapperNavigation'

export const Item = styled.div`
  max-height: 18px;
  position: relative;
  padding: 0 1.75em;
  &:first-child {
    padding: 0 1.75em 0 0;
  }
`

export const ItemLink = styled.a`
  color: ${colors.black};
  display: block;
  font-weight: ${(p) => p.theme.fontWeight.light};
  letter-spacing: 1px;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.25s;
  white-space: nowrap;

  &:hover,
  &:focus {
    color: ${colors.grey};
    outline: none;
  }
`

export const Layer = styled.div`
  ${fadeIn};
  display: ${(p) => (p.active ? 'flex' : 'none')};
  position: absolute;
  top: 35px;
  width: 100vw;
`

export const Layers = styled.div`
  background: white;
  border-bottom: 1px solid ${colors.whiteSmoke};
  display: ${(p) => (p.active ? 'flex' : 'none')};
  left: 0;
  height: 100%;
  position: absolute;
  top: -1px;
  width: 100vw;

  &::before {
    background: white;
    content: '';
    height: 100%;
    position: absolute;
    width: 100vw;
    left: -100%;
  }
`
