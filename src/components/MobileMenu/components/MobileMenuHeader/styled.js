import styled from 'styled-components'
import colors from 'styles/colors'

export const Header = styled.header`
  align-items: center;
  background: ${colors.white};
  border-bottom: 1px solid ${colors.lightGray1};
  display: flex;
  height: 60px;
  justify-content: flex-end;
  padding: 0 25px;
`

export const GoBack = styled.div`
  margin-right: auto;
`

export const ArrowIcon = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  height: 28px;
  padding: 0;
  width: 28px;
`

export const SearchIcon = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 20px;
`
