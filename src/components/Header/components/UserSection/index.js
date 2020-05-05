import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import UserMenu from '../UserMenu'
import { Wrapper, SignUpLink } from './styled'

export default class UserSection extends PureComponent {
  static propTypes = {
    isGuest: PropTypes.bool,
    onLogin: PropTypes.func,
    nameOrEmail: PropTypes.string
  }

  static defaultProps = {
    isGuest: true,
    nameOrEmail: "",
    onLogin: () => {}
  }

  handleLogIn = (e) => {
    const { onLogin } = this.props
    e.preventDefault()

    onLogin()
  }

  render () {
    const { isGuest, nameOrEmail } = this.props

    return (
      <Wrapper>
        {isGuest
          ? <SignUpLink href='#login' onClick={this.handleLogIn}><FormattedMessage id='common.signup'/></SignUpLink>
          : <UserMenu nameOrEmail={nameOrEmail} />
        }
      </Wrapper>
    )
  }
}

// const mapStateToProps = (state) => ({
//   isGuest: isGuest(state),
//   userNameOrEmail: selectUserNameOrEmail(state)
// })
//
// const mapDispatchToProps = (dispatch) => ({
//   openOnboarding () { dispatch(openOnboardingModal()) }
// })
//
// export default connect(mapStateToProps, mapDispatchToProps)(UserSection)
