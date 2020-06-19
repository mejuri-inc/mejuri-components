import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Wrapper, Title, Subtitle, WelcomeMessage } from './styled'
import { FormattedMessage } from 'react-intl'
import Input from 'components/Input'
import { ValidationHelper } from 'helpers/validation'

export default class FooterNewsletterSubscribe extends PureComponent {
  static propTypes = {
    track: PropTypes.func
  }

  constructor(props) {
    super(props)

    this.state = {
      isSubmitted: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = (form) => {
    const { track } = this.props
    const { email } = form || {}
    track('subscribeNewsletter', {
      email,
      source: 'Bottom form'
    })
    this.setState({ isSubmitted: true })
  }

  render() {
    const { isSubmitted } = this.state
    return (
      <Wrapper>
        {!isSubmitted && (
          <div>
            <Title>
              <FormattedMessage id='footer.newsletterSubscribe.title' />
            </Title>
            <Subtitle>
              <FormattedMessage id='footer.newsletterSubscribe.subtitle' />
            </Subtitle>
            <Input
              submit={this.handleSubmit}
              validationErrorId='form.error.string.email'
              placeholderId='form.field.newsletterSubscribe'
              emptyValueErrorId='form.error.mixed.required'
              validateValue={ValidationHelper.validEmail}
            />
          </div>
        )}
        {isSubmitted && (
          <WelcomeMessage>
            <FormattedMessage id='footer.newsletterSubscribe.welcome' />
          </WelcomeMessage>
        )}
      </Wrapper>
    )
  }
}
