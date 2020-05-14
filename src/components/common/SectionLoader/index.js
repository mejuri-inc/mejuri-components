import React from 'react'
import PropTypes from 'prop-types'
import { Content, Overlay, Wrapper, Spinner } from './styled'

export const SectionLoader = ({ children, isFetching }) => (
  <Wrapper>
    <Content>{children}</Content>
    {isFetching && (
      <Overlay>
        <Spinner />
      </Overlay>
    )}
  </Wrapper>
)

SectionLoader.propTypes = {
  isFetching: PropTypes.bool,
  children: PropTypes.node
}

SectionLoader.defaultProps = {
  isFetching: false
}

export default SectionLoader
