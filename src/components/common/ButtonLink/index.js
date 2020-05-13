import styled from 'styled-components'
import colors from '../../../styles/colors'
import { fontWeight } from '../../../styles/settings'

export const ButtonLink = styled.button`
  appearance: none;
  color: ${colors.black};
  text-decoration: underline;
  border: 0;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  transition: all 0.1s ease;
  font-weight: ${fontWeight.medium};

  &:hover {
    color: ${colors.darkGray1};
  }
`
ButtonLink.displayName = 'ButtonLink'

export default ButtonLink
