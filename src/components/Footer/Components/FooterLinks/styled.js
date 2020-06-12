import styled from 'styled-components'
import colors from 'styles/colors'
import { fontWeight } from 'styles/settings'

const lg = '1024px'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  max-width: 700px;
  font-size: 14px;
  @media (min-width: ${lg}) {
    margin-right: 10%;
  }
`
Wrapper.displayName = 'FooterLinksWrapper'

export const Col = styled.div`
  width: 50%;
  @media (min-width: ${lg}) {
    width: auto;
  }
`
Col.displayName = 'FooterLinksCol'

export const Title = styled.div`
  font-weight: ${fontWeight.medium};
  text-transform: uppercase;
  margin-bottom: 24px;
  letter-spacing: 1.5px;
  @media (min-width: ${lg}) {
    margin-bottom: 30px;
  }
`
Title.displayName = 'FooterLinksTitle'

export const Links = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`
Links.displayName = 'FooterLinksLinks'

export const Link = styled.li`
  margin-bottom: 12px;
  font-weight: ${fontWeight.light};
  @media (min-width: ${lg}) {
    margin-bottom: 16px;
  }

  & > a {
    position: relative;
    color: ${colors.black};
    text-decoration: none;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: 1px;
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
  }
`
Link.displayName = 'FooterLinksLink'
