import styled from 'styled-components'
import colors from 'styles/colors'
import { fontWeight } from 'styles/settings'

const md = '768px'

export const Wrapper = styled.div`
  display: flex;
  width: 100%;

  @media (min-width: ${md}) {
    width: unset;
  }
`
Wrapper.displayName = 'LegalLinksWrapperFooter'

export const Link = styled.a`
  text-decoration: none;
  color: ${colors.black};
  font-size: 13px;
  margin-right: auto;
  font-weight: ${fontWeight.light};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -1px;
    height: 1px;
    width: 0;
    background-color: #adadad;
    transition: all 0.1s ease;
  }

  &:hover::before,
  &:focus::before,
  &:active::before {
    width: 100%;
  }

  @media (min-width: ${md}) {
    margin-right: 24px;
    font-size: 10px;
  }
`
Link.displayName = 'LinkFooter'

export const Text = styled.div`
  color: ${colors.black};
  font-size: 13px;
  font-weight: ${fontWeight.light};
  margin: 0;

  @media (min-width: ${md}) {
    margin-right: 24px;
    font-size: 10px;
  }
`
Text.displayName = 'TextFooter'
