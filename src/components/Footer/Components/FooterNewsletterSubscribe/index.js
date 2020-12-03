import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Wrapper, Title, Subtitle, WelcomeMessage } from './styled'
import FormattedMessageWithLoader from 'components/FormattedMessageWithLoader'
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
            <FormattedMessageWithLoader id='footer.newsletterSubscribe.title' />
          </Title>
          <Subtitle>
            <FormattedMessageWithLoader id='footer.newsletterSubscribe.subtitle' />
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
          <FormattedMessageWithLoader id='footer.newsletterSubscribe.welcome' />
        </WelcomeMessage>
      )}
    </Wrapper>
  )
}

FooterNewsletterSubscribe.propTypes = {
  track: PropTypes.func
}

export default FooterNewsletterSubscribe
