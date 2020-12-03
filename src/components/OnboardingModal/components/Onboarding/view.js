import React from 'react'
import PropTypes from 'prop-types'
import { FormattedHTMLMessage, intlShape, injectIntl } from 'react-intl'
import FormattedMessageWithLoader from 'components/FormattedMessageWithLoader'
import Input from './components/Input'
import ContinueButton from './components/Button'
import Errors from './components/Errors'
import Icon from './components/Icon'
import Checkbox from './components/Checkbox'
import Facebook from 'resources/icons/FacebookSquare'
import { MuiThemeProvider } from '@material-ui/core'
import MejuriTheme from 'themes/material'

import {
  Wrapper,
  Title,
  Caption,
  Controls,
  Control,
  Actions,
  FacebookLogin,
  FooterLink,
  OptEmails
} from './styled'

const OnboardingView = ({
  intl,
  isFetching,
  controls,
  values,
  errors,
  apiErrors,
  title,
  caption,
  fields,
  autoFocus,
  action,
  footerLink,
  facebookLogin,
  onChange,
  checkboxOnChange,
  onSubmit,
  step
}) => {
  return (
    <MuiThemeProvider theme={MejuriTheme}>
      <Wrapper>
        {!!title && <Title>{intl.formatMessage({ id: title })}</Title>}
        {!!caption && <Caption>{intl.formatMessage({ id: caption })}</Caption>}
        <form action='#' onSubmit={onSubmit}>
          {!!fields.length && (
            <Controls>
              {fields.map((field) => {
                const inputProps = controls[field]
                const value = values[inputProps.name]
                const error =
                  errors[inputProps.name] &&
                  intl.formatMessage({ id: errors[inputProps.name] })
                const apiError = apiErrors[inputProps.name]
                return (
                  <Control key={field} readOnly={inputProps.readOnly}>
                    <Input
                      value={value}
                      onChange={onChange}
                      autoFocus={field === autoFocus}
                      {...inputProps}
                    />
                    <Errors list={[error, apiError]} />
                  </Control>
                )
              })}
              {step === 'register' && (
                <OptEmails>
                  <Checkbox
                    name='newsletter-opt'
                    onChange={checkboxOnChange}
                    checked={values.newsletter}
                    labelText={
                      <FormattedHTMLMessage id='onboarding.login.emailOpt' />
                    }
                  />
                </OptEmails>
              )}
            </Controls>
          )}
          {!!action && (
            <Actions>
              <ContinueButton disabled={isFetching} type='submit'>
                <FormattedMessageWithLoader id={action} />
              </ContinueButton>
            </Actions>
          )}
        </form>
        {!!footerLink && (
          <FooterLink href='#forgot-password' onClick={footerLink.onClick}>
            <FormattedMessageWithLoader id={footerLink.label} />
          </FooterLink>
        )}
        {!!facebookLogin && (
          <FacebookLogin href='#facebook-login' onClick={facebookLogin.onClick}>
            <Icon w='24px'>
              <Facebook />
            </Icon>
            <FormattedMessageWithLoader id={facebookLogin.label} />
          </FacebookLogin>
        )}
      </Wrapper>
    </MuiThemeProvider>
  )
}

OnboardingView.defaultProps = {
  isFetching: false
}

OnboardingView.propTypes = {
  intl: intlShape,
  isFetching: PropTypes.bool,
  controls: PropTypes.object,
  values: PropTypes.object,
  errors: PropTypes.object,
  apiErrors: PropTypes.object,
  title: PropTypes.string,
  caption: PropTypes.string,
  fields: PropTypes.arrayOf(PropTypes.string),
  autoFocus: PropTypes.string,
  action: PropTypes.string,
  footerLink: PropTypes.shape({
    label: PropTypes.string,
    onClick: PropTypes.func
  }),
  facebookLogin: PropTypes.shape({
    label: PropTypes.string,
    onClick: PropTypes.func
  }),
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  step: PropTypes.string
}

export default injectIntl(OnboardingView)
