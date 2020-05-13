import styled from 'styled-components'

export const ThumbWrapper = styled.a`
  display: inline-block;
  width: 30%;

  & > img {
    max-height: 95px;
  }
`
ThumbWrapper.displayName = 'ThumbnailThumbWrapper'
