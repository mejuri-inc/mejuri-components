import styled from 'styled-components/macro'
import colors from 'styles/colors'

export const ElementWrapper = styled.div`
  padding: 0 30px;
`

export const RemoveButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  height: 18px;
  padding: 3px;
  position: absolute;
  right: 30px;
  top: 20px;
  width: 18px;
`
RemoveButton.displayName = 'ItemsListRemoveButton'

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`
List.displayName = 'ItemsListList'

export const ListElement = styled.li`
  display: flex;
  flex-direction: column;
  /* padding: 0.7em 30px 5px 30px; */
  padding: 0.7em 0 0px 0;
  position: relative;
  border-bottom: 1px solid ${colors.lightGray1};

  &:last-child {
    border: none;
  }
`
ListElement.displayName = 'ItemsListListElement'
