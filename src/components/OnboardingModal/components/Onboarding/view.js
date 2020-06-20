import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage, intlShape, injectIntl } from 'react-intl'
import Input from './components/Input'
import ContinueButton from './components/Button'
import Errors from './components/Errors'
import Icon from './components/Icon'
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
  FooterLink
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
  onSubmit
}) => (
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
          </Controls>
        )}
        {!!action && (
          <Actions>
            <ContinueButton disabled={isFetching} type='submit'>
              <FormattedMessage id={action} />
            </ContinueButton>
          </Actions>
        )}
      </form>
      {!!footerLink && (
        <FooterLink href='#forgot-password' onClick={footerLink.onClick}>
          <FormattedMessage id={footerLink.label} />
        </FooterLink>
      )}
      {!!facebookLogin && (
        <FacebookLogin href='#facebook-login' onClick={facebookLogin.onClick}>
          <Icon w='24px'>
            <Facebook />
          </Icon>
          <FormattedMessage id={facebookLogin.label} />
        </FacebookLogin>
      )}
    </Wrapper>
  </MuiThemeProvider>
)

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
  onSubmit: PropTypes.func
}

export default injectIntl(OnboardingView)
