import styled from 'styled-components'

export const SubPage = styled.div`
  height: 100%;
  display: ${(p) => (p.active ? 'initial' : 'none')};
  padding: 0 25px;
  position: absolute;
  right: 0;
  width: 50%;
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
  border-top: 1px solid ${(p) => p.theme.colors.lightGray1};
`

export const Item = styled.li`
  font-size: 16px;
  font-weight: bold;
  padding: 15px 0;
  margin-bottom: 0px;

  &:first-child {
    padding-top: 30px;
  }

  & > a {
    color: ${(p) => p.theme.colors.black};
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: ${(p) => p.theme.colors.grey};
    }
  }

  & > p {
    font-weight: ${(p) => p.theme.fontWeight.light};
    margin: 1em 0 0 0;
  }
`
