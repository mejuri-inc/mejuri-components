import styled from 'styled-components'
import colors from 'styles/colors'

export const SubPage = styled.div`
  height: 100%;
  display: ${(p) => (p.active ? 'initial' : 'none')};
  padding: 0 25px;
  position: absolute;
  right: 0;
  width: 50%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0;
  }
`

export const Title = styled.div`
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 25px 0;
`

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid ${colors.lightGray1};
`

export const Item = styled.li`
  font-size: 16px;
  font-weight: bold;
  padding: 30px 0 0 0;

  & > a {
    color: ${colors.black};
    text-decoration: none;
    cursor: pointer;
  }
`
