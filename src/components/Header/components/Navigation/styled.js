import styled from 'styled-components'
import colors from '../../../../styles/colors'

export const Wrapper = styled.div`
  padding-left: 30px;
  width: 30%;
`
Wrapper.displayName = 'WrapperNavigation'

export const MainSections = styled.div`
  display: flex;
  list-style-type: none;
  padding: 0;
`
MainSections.displayName = 'MainSectionsNavigation'

export const MainSection = styled.a`
  color: ${colors.black};
  cursor: pointer;
  display: block;
  min-width: 90px;
  text-decoration: none;
  transition: all 0.25s;

  &:hover {
    color: ${colors.grey};
  }
`
MainSection.displayName = 'MainSectionNavigation'
