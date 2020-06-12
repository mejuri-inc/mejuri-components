import React from 'react'
import { Wrapper, Link, Text } from './styled'
import { FormattedMessage } from 'react-intl'

function LegalLinks() {
  return (
    <Wrapper>
      <Link href='https://mejuri.com/static/terms'>
        <FormattedMessage id='footer.bar.terms' />
      </Link>
      <Link href='https://mejuri.com/static/privacy'>
        <FormattedMessage id='footer.bar.privacy' />
      </Link>
      <Text>
        <FormattedMessage id='footer.bar.mejuri' />
      </Text>
    </Wrapper>
  )
}

export default LegalLinks
