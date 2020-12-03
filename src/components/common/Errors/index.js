import React from 'react'
import PropTypes from 'prop-types'
import FormattedMessageWithLoader from 'components/FormattedMessageWithLoader'
import { Wrapper, Error } from './styled'

const Errors = ({ list }) => {
  const errors = Array.isArray(list) ? list.flat().filter((e) => e) : [list]

  if (!errors.length) return null

  return (
    <Wrapper>
      {errors.map((error, key) => (
        <Error key={key}>
          {error === true ? (
            <FormattedMessageWithLoader id='error.generic' />
          ) : (
            error && (
              <FormattedMessageWithLoader id={error} defaultMessage={error} />
            )
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
