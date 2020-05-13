import React from 'react'
import Proptypes from 'prop-types'
import { ThumbWrapper } from './styled'

export const Thumbnail = ({ href, src, alt }) => {
  return (
    <ThumbWrapper href={href}>
      <img src={src} alt={alt} />
    </ThumbWrapper>
  )
}

Thumbnail.propTypes = {
  href: Proptypes.string,
  src: Proptypes.string,
  alt: Proptypes.string
}

export default Thumbnail
