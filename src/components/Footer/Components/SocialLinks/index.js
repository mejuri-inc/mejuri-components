import React from 'react'
import { Wrapper, IconLink } from './styled'
import PropTypes from 'prop-types'
import FacebookIcon from 'resources/icons/Facebook'
import InstagramIcon from 'resources/icons/Instagram'
import PinterestIcon from 'resources/icons/Pinterest'
import TwitterIcon from 'resources/icons/Twitter'

const SOCIAL_ICONS = {
  Facebook: <FacebookIcon />,
  Instagram: <InstagramIcon />,
  Pinterest: <PinterestIcon />,
  Twitter: <TwitterIcon />
}

export function getIcon(IconName) {
  return SOCIAL_ICONS[IconName]
}

function SocialLinks({ socialLinks }) {
  return (
    <Wrapper>
      {socialLinks.map((link) => (
        <IconLink
          key={link.tag}
          title={link.tag}
          href={link.link}
          target='_blank'
          rel='no-follow'
        >
          {getIcon(link.tag)}
        </IconLink>
      ))}
    </Wrapper>
  )
}

SocialLinks.propTypes = {
  socialLinks: PropTypes.array
}

export default SocialLinks
