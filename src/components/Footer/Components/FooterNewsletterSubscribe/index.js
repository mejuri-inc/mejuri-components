import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {
  Wrapper,
  Title,
  Subtitle,
  Arrow,
  InputWrapper,
  WelcomeMessage
} from './styled'
import { FormattedMessage } from 'react-intl'
import { Formik, Form } from 'formik'
import v from 'resources/validations'
import FormInput from 'components/form/FormInput'
import ChevronIcon from 'resources/icons/Chevron'

export default class FooterNewsletterSubscribe extends PureComponent {
  static propTypes = {
    isEnabled: PropTypes.bool,
    track: PropTypes.func
  }

  static schema = v.object().shape({
    email: v.string().email().required()
  })

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

  get formData() {
    return { email: '' }
  }

  render() {
    const { isEnabled } = this.props
    const { isSubmitted } = this.state
    if (!isEnabled) return null
    return (
      <Wrapper>
        {!isSubmitted && (
          <>
            <Title>
              <FormattedMessage id='footer.newsletterSubscribe.title' />
            </Title>
            <Subtitle>
              <FormattedMessage id='footer.newsletterSubscribe.subtitle' />
            </Subtitle>
            <Formik
              initialValues={this.formData}
              onSubmit={this.handleSubmit}
              validationSchema={FooterNewsletterSubscribe.schema}
              render={({ isSubmitting }) => (
                <Form>
                  <InputWrapper>
                    <FormInput
                      name='email'
                      label='form.field.newsletterSubscribe'
                      type='email'
                    />
                    <Arrow type='submit' disabled={isSubmitting}>
                      <ChevronIcon />
                    </Arrow>
                  </InputWrapper>
                </Form>
              )}
            />
          </>
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
