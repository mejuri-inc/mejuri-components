import styled from 'styled-components'
import colors from 'styles/colors'
import { fontWeight } from 'styles/settings'

export const Wrapper = styled.div`
  padding-left: 30px;
  width: 30%;
`
Wrapper.displayName = 'WrapperNavigation'

export const MainSections = styled.div`
  display: flex;
  list-style-type: none;
  padding: 0;
  justify-content: space-around;
`
MainSections.displayName = 'MainSectionsNavigation'

export const MainSection = styled.a`
  background: transparent;
  border: none;
  color: ${colors.black};
  cursor: pointer;
  display: block;
  letter-spacing: 1px;
  min-width: 90px;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.25s;
  font-weight: ${fontWeight.light};
  border: none;
  background-color: ${colors.white};

  &:hover,
  &:focus {
    color: ${colors.grey};
    outline: none;
  }
`
MainSection.displayName = 'MainSectionNavigation'
