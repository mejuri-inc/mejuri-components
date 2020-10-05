import styled from 'styled-components'
import colors from 'styles/colors'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  padding: 0;
  flex-basis: 33.3%;

  @media (min-width: 1200px) {
    flex-basis: 22%;
    column-gap: 30px;
    justify-content: flex-start;
  }
`
Wrapper.displayName = 'WrapperNavigation'

export const Item = styled.div`
  max-height: 18px;
  position: relative;
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

export const LayerContainer = styled.div`
  display: flex;
  opacity: ${(p) => (p.active ? '1' : '0')};
  pointer-events: ${(p) => (p.active ? 'auto' : 'none')};
  transition: 0.5s opacity;
  position: absolute;
  top: ${(p) => (p.shrinked ? '36px' : '51px')};
  width: 100vw;
`

export const LayerBackground = styled.div`
  background: white;
  border-bottom: 1px solid ${colors.whiteSmoke};
  display: flex;
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
    border-bottom: 1px solid ${colors.whiteSmoke};
  }
`
