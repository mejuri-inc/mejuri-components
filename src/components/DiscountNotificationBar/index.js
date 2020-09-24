import React from 'react'
import PropTypes from 'prop-types'
import { FormattedHTMLMessage } from 'react-intl'
import RegularNotificationBar from 'components/RegularNotificationBar'

const linkUrl = (host, url) => `${host}${url}`

const DiscountNotificationBar = ({ apiHost, name, link }) => {
  if (!name) return null
  return (
    <RegularNotificationBar>
      <FormattedHTMLMessage
        id='header.notifications.discount'
        values={{
          name,
          link: linkUrl(apiHost, link)
        }}
      />
    </RegularNotificationBar>
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
