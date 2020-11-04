import styled from 'styled-components'
import { fontWeight } from 'styles/settings'
import { fadeIn } from 'styles/effects'

const md = '768px'

export const Wrapper = styled.div`
  ${fadeIn}
  margin-top: 48px;
  min-width: 250px;
  @media (max-width: ${md}) {
    width: 100%;
  }
  @media (min-width: ${md}) {
    margin: 0;
    min-width: 350px;
  }
`
Wrapper.displayName = 'FooterNewsletterSubscribeWrapper'

export const Title = styled.div`
  font-size: 14px;
  font-weight: ${fontWeight.regular};
  text-transform: uppercase;
  letter-spacing: 1.5px;
`
Title.displayName = 'FooterNewsletterSubscribeTitle'

export const WelcomeMessage = styled.div`
  ${fadeIn}
  font-size: 25px;
  font-weight: ${fontWeight.regular};
  font-weight: 300;
`
WelcomeMessage.displayName = 'FooterNewsletterSubscribeWelcomeMessage'

export const Subtitle = styled.p`
  margin: 6px 0 0 0;
  font-size: 14px;
`
Subtitle.displayName = 'FooterNewsletterSubscribeSubtitle'

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`
InputWrapper.displayName = 'FooterNewsletterSubscribeInputWrapper'

export const Arrow = styled.button`
  position: absolute;
  height: 47px;
  width: 47px;
  padding: 0 16px;
  right: 0;
  top: 0;
  appearance: none;
  border: none;
  outline: 0;
  background: transparent;
  cursor: pointer;
`
Arrow.displayName = 'FooterNewsletterSubscribeArrow'
