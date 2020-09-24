import React from 'react'
import PropTypes from 'prop-types'
import { FormattedHTMLMessage } from 'react-intl'
import GenericNotificationBar from 'components/GenericNotificationBar'

const linkUrl = (host, url) => `${host}${url}`

const DiscountNotificationBar = ({ apiHost, name, link }) => {
  if (!name) return null
  return (
    <GenericNotificationBar>
      <FormattedHTMLMessage
        id='header.notifications.discount'
        values={{
          name,
          link: linkUrl(apiHost, link)
        }}
      />
    </GenericNotificationBar>
  )
}

DiscountNotificationBar.defaultProps = {
  apiHost: typeof window !== 'undefined' ? window.location.origin : '',
  link: '/static/crewfineprint'
}

DiscountNotificationBar.propTypes = {
  apiHost: PropTypes.string,
  name: PropTypes.string,
  link: PropTypes.string
}

export default DiscountNotificationBar
