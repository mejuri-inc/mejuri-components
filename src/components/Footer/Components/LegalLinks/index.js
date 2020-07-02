import React from 'react'
import { Wrapper, Link, Text } from './styled'
import PropTypes from 'prop-types'

function getLink(link) {
  return link.fields.url ? (
    <Link href={link.fields.url} key={link.sys.id}>
      {link.fields.text}
    </Link>
  ) : (
    <Text key={link.sys.id}>{link.fields.text}</Text>
  )
}

function LegalLinks({ legalLinks }) {
  if (!legalLinks) return null
  return (
    <Wrapper>{legalLinks.fields.children.map((link) => getLink(link))}</Wrapper>
  )
}

LegalLinks.propTypes = {
  socialLinks: PropTypes.array,
  legalLinks: PropTypes.object
}

export default LegalLinks
