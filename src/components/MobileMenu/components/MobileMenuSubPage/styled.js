import styled from 'styled-components'
import colors from 'styles/colors'

export const SubPage = styled.div`
  height: 100%;
  display: ${(p) => (p.active ? 'initial' : 'none')};
  padding: 0 25px;
  position: absolute;
  right: 0;
  width: 50%;
`

export const Title = styled.div`
  background: ${colors.lightGray3};
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 25px 0;
`

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

export const Item = styled.li`
  font-size: 16px;
  font-weight: 500;
  padding: 30px 0 0 0;

  & > a {
    color: ${colors.black};
    text-decoration: underline;
    cursor: pointer;
  }
`
