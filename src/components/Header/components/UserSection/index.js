import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import UserMenu from '../UserMenu'
import { Wrapper, SignUpLink } from './styled'

function UserSection({ isGuest, onLogin, nameOrEmail }) {
  return (
    <Wrapper>
      {isGuest ? (
        <SignUpLink onClick={() => onLogin()}>
          <FormattedMessage id='common.signup' />
        </SignUpLink>
      ) : (
        <UserMenu nameOrEmail={nameOrEmail} />
      )}
    </Wrapper>
  )
}

UserSection.propTypes = {
  isGuest: PropTypes.bool,
  onLogin: PropTypes.func,
  nameOrEmail: PropTypes.string
}

UserSection.defaultProps = {
  isGuest: true,
  nameOrEmail: '',
  onLogin: () => {}
}

export default UserSection
