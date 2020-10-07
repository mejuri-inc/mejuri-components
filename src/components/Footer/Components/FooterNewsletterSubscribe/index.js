import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Wrapper, Title, Subtitle, WelcomeMessage } from './styled'
import { FormattedMessage } from 'react-intl'
import Input from 'components/Input'
import { ValidationHelper } from 'helpers/validation'

const FooterNewsletterSubscribe = ({ track }) => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const handleSubmit = (email) => {
    track('subscribeNewsletter', {
      email,
      source: 'Bottom form'
    })
    setIsSubmitted(true)
  }

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
            submit={handleSubmit}
            validationErrorId='form.error.string.email'
            placeholderId='form.field.newsletterSubscribe'
            emptyValueErrorId='form.error.mixed.required'
            validateValue={ValidationHelper.validEmail}
            data-h='footer-newsletter-input'
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

FooterNewsletterSubscribe.propTypes = {
  track: PropTypes.func
}

export default FooterNewsletterSubscribe
