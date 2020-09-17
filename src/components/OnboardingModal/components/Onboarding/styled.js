/* eslint-disable prettier/prettier */
import styled from 'styled-components'
import colors from 'styles/colors'
import { fadeIn } from 'styles/effects'

export const Wrapper = styled.div`
  ${fadeIn}
  line-height: 30px;

  label[class^="MuiFormLabel"] {
    font-size: 16px;
    transform: translate(12px, -6px) scale(0.75);
  }

  button[class^="MuiButtonBase-root"] {
    min-height: 42px;
  }
`
Wrapper.displayName = 'OnboardingWrapper'

export const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  line-height: 24px;
  padding: 6px 0;
`
Title.displayName = 'OnboardingTitle'

export const Caption = styled.div`
  font-size: 18px;
  margin-bottom: 24px;
  font-weight: 300;
  line-height: 24px;
  padding: 6px 0;
  letter-spacing: 0.1px;
`
Title.displayName = 'OnboardingCaption'

export const Controls = styled.div``
Controls.displayName = 'OnboardingFormControls'

export const Control = styled.div`
  ${({ readOnly }) =>
    readOnly &&
    `
    user-select: none;

    input {
      pointer-events: none;
    }
  `}

  &:not(:last-child) {
    margin-bottom: 24px;
  }
`
Control.displayName = 'OnboaringFormControl'

export const Actions = styled.div`
  margin-top: 24px;
`
Actions.displayName = 'OnboardingFormActions'

export const FooterLink = styled.a`
  display: block;
  margin-top: 24px;
  font-weight: 300;
  transition: all 0.1s ease;

  &,
  &:active,
  &:visited,
  &:focus {
    color: ${colors.black};
  }

  &:hover {
    color: ${colors.darkGray1};
  }
`
FooterLink.displayName = 'OnboardingFooterLink'

export const FacebookLogin = styled.a`
  align-items: center;
  color: ${colors.facebookBlue};
  background: transparent;
  border: 0;
  display: flex;
  font-size: 14px;
  font-weight: 800;
  height: 100px;
  justify-content: center;
  line-height: 24px;
  margin-top: 20px;
  text-decoration: none;
  transition: all 0.1s ease;

  & > i {
    margin-right: 10px;
  }

  &:hover {
    opacity: 0.7;
  }
`
FacebookLogin.displayName = 'OnboardingFacebookLogin'
