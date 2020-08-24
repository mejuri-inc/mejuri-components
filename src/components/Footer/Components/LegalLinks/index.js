import React from 'react'
import { Wrapper, Link, Text } from './styled'
import PropTypes from 'prop-types'
import get from 'lodash.get'

function getLink(link) {
  return link.url ? (
    <Link href={link.url} key={link._id} data-h='footer-legal-btn'>
      {link.text}
    </Link>
  ) : (
    <Text key={link._id}>{link.text}</Text>
  )
}

function LegalLinks({ legalLinks }) {
  const legal = get(legalLinks, 'children')
  if (!legal) return null
  return <Wrapper>{legal.map((link) => getLink(link))}</Wrapper>
}

LegalLinks.propTypes = {
  socialLinks: PropTypes.array,
  legalLinks: PropTypes.object
}

export default LegalLinks
