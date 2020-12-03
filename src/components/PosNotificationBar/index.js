import React from 'react'
import PropTypes from 'prop-types'
import FormattedMessageWithLoader from 'components/FormattedMessageWithLoader'
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
            <FormattedMessageWithLoader
              id='notifications.pos.buyerMessage'
              values={{ userName: user.name || user.email }}
            />
            <span>
              {' '}
              <FormattedMessageWithLoader id='notifications.pos.notYou?' />{' '}
            </span>
            <a href={`${apiHost}/logout`}>
              <FormattedMessageWithLoader id='notifications.pos.logoutText' />
            </a>
            .
          </>
        ) : (
          <FormattedMessageWithLoader id='notifications.pos.guestBuyerMessage' />
        )}
      </Buyer>
    </Wrapper>
  )
}

PosNotificationBar.defaultProps = {
  apiHost: typeof window !== 'undefined' ? window.location.origin : ''
}

PosNotificationBar.propTypes = {
  apiHost: PropTypes.string,
  pos: PropTypes.object,
  user: PropTypes.object
}

export default PosNotificationBar
