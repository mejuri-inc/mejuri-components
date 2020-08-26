import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import UserMenu from '../UserMenu'
import { Wrapper, SignUpLink } from './styled'

function UserSection({ isGuest, onLogin, nameOrEmail, pos }) {
  return (
    <Wrapper>
      {isGuest ? (
        pos ? (
          <SignUpLink>{pos.name}</SignUpLink>
        ) : (
          <SignUpLink onClick={() => onLogin()} data-h='header-signup-btn'>
            <FormattedMessage id='common.signin' />
          </SignUpLink>
        )
      ) : (
        <UserMenu nameOrEmail={nameOrEmail} />
      )}
    </Wrapper>
  )
}

UserSection.propTypes = {
  isGuest: PropTypes.bool,
  onLogin: PropTypes.func,
  nameOrEmail: PropTypes.string,
  pos: PropTypes.object
}

UserSection.defaultProps = {
  isGuest: true,
  nameOrEmail: '',
  onLogin: () => {},
  pos: null
}

export default UserSection
