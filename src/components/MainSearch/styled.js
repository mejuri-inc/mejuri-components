import styled from 'styled-components/macro'
import colors from 'styles/colors'
import { fadeIn, spinner } from 'styles/effects'

export const Position = styled.div`
  height: 0;
  position: relative;
  width: 100%;
`

export const Content = styled.div`
  width: 100%;
  @media screen and (min-width: 768px) {
    padding-top: 30px;
  }
`

export const Wrapper = styled.section`
  ${fadeIn};
  background: ${colors.white};
  display: ${(p) => (p.isOpened ? 'flex' : 'none')};
  justify-content: center;
  min-height: 200px;
  opacity: ${(p) => (p.isOpened ? 1 : 0)};
  position: fixed;
  top: 0;
  visibility: ${(p) => (p.isOpened ? 'visible' : 'hidden')};
  width: 100%;
  z-index: 1;
  max-height: 100vh;
  padding: 20px;
  @media screen and (min-width: 768px) {
    padding-top: 30px;
    position: absolute;
  }
`

export const SearchBox = styled.div`
  display: flex;
  width: 100%;

  & > input {
    border: none;
    border-bottom: 1px solid #d9d9d9;
    font-size: 20px;
    height: 48px;
    padding: 5px;
    padding-right: 40px;
    width: 100%;
  }
`

export const Header = styled.div`
  margin: auto;
  max-width: 800px;
  padding-bottom: 25px;
  position: relative;

  &::after {
    content: '';
    height: 16px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: -16px;
    background: linear-gradient(
      to bottom,
      #fff 0%,
      rgba(255, 255, 255, 0) 100%
    );
    z-index: 1;
  }
`

export const Hint = styled.div`
  font-size: 14px;
  font-weight: 300;
  line-height: 24px;
  margin: 5px 0 0 5px;
`

export const NumberOfResults = styled.div`
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 0.86px;
  line-height: 18px;
  margin: 30px auto;
  max-width: 800px;
  text-transform: uppercase;
`

export const Scrollable = styled.div`
  ${({ isFetching }) => isFetching && spinner()}
  overflow-y: scroll;
  height: 65vh;
  position: relative;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const Close = styled.button`
  background: transparent;
  border: none;
  height: 40px;
  width: 40px;

  & > svg {
    cursor: pointer;
    height: 16px;
    width: 16px;
  }
`

export const LoadMore = styled.div`
  ${({ isFetching }) => isFetching && spinner()}
  height: 40px;
  width: 100%;
`
