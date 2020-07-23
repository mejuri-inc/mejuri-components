import styled from 'styled-components/macro'
import colors from 'styles/colors'

export const Header = styled.header`
  align-items: center;
  background: ${colors.white};
  border-bottom: 1px solid ${colors.lightGray1};
  display: flex;
  height: 60px;
  justify-content: flex-end;
  padding: 0 16px;
`

export const GoBack = styled.div`
  margin-right: auto;
  cursor: pointer;
`

export const ArrowIcon = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  height: 28px;
  padding: 0;
  width: 28px;
`

export const SearchIcon = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  height: 20px;
  margin-right: 20px;
  padding: 2px;
  width: 20px;
`
