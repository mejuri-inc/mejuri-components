import styled from 'styled-components'
import colors from 'styles/colors'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-column-gap: 45px;
  justify-content: flex-start;
  flex-basis: 33.3%;

  @media (min-width: 1200px) {
    flex-basis: 22%;
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
  top: ${(p) => (p.shrinked ? '35px' : '50px')};
  width: max-content;
`

export const LayerBackground = styled.div`
  background: white;
  border-bottom: 1px solid ${colors.whiteSmoke};
  display: flex;
  left: ${(p) => p.left}px;
  height: 100%;
  position: absolute;
  top: -1px;
  width: 100vw;
`
