import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import styled from 'styled-components'
import colors from 'styles/colors'

export const Wrapper = styled.div`
  margin-top: 6px;
`
Wrapper.displayName = 'Errors'

export const Error = styled.div`
  flex: 1;
  color: ${colors.error};
  line-height: 1.8;
`
Error.displayName = 'Error'

const Errors = ({ list }) => {
  const errors = Array.isArray(list) ? list.flat().filter((e) => e) : [list]

  if (!errors.length) return null

  return (
    <Wrapper>
      {errors.map((error, key) => (
        <Error key={key}>
          {error === true ? (
            <FormattedMessage id='error.generic' />
          ) : (
            error && <FormattedMessage id={error} defaultMessage={error} />
          )}
        </Error>
      ))}
    </Wrapper>
  )
}

Errors.propTypes = {
  list: PropTypes.any
}

export default Errors
