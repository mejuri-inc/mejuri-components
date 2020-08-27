import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import { Wrapper, Buyer, POSName } from './styled'

const PosNotificationBar = ({ pos, user, apiHost }) => {
  if (!pos) return null

  return (
    <Wrapper>
      <POSName>
        {pos.name}{' '}
        <span role='img' aria-label='shine'>
          ✨
        </span>
      </POSName>
      <Buyer>
        {user ? (
          <>
            <FormattedMessage
              id='notifications.pos.buyerMessage'
              values={{ userName: user.name || user.email }}
            />
            <span>
              {' '}
              <FormattedMessage id='notifications.pos.notYou?' />{' '}
            </span>
            <a href={`${apiHost}/logout`}>
              <FormattedMessage id='notifications.pos.logoutText' />
            </a>
            .
          </>
        ) : (
          <FormattedMessage id='notifications.pos.guestBuyerMessage' />
        )}
      </Buyer>
    </Wrapper>
  )
}

PosNotificationBar.defaultProps = {
  apiHost: window.location.origin
}

PosNotificationBar.propTypes = {
  apiHost: PropTypes.string,
  pos: PropTypes.object,
  user: PropTypes.object
}

export default PosNotificationBar
