import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, Icon } from './styled'

const NotificationBar = ({
  backgroundColor,
  textColor,
  mustHideInMobile,
  identifier,
  text,
  onDismiss
}) => {
  if (!text) return null

  return (
    <Wrapper
      backgroundColor={backgroundColor}
      color={textColor}
      hide={mustHideInMobile}
    >
      {text}
      <Icon
        onClick={() => onDismiss(identifier)}
        color={textColor}
        data-h='notification-close-btn'
      />
    </Wrapper>
  )
}

NotificationBar.propTypes = {
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  mustHideInMobile: PropTypes.bool,
  identifier: PropTypes.string,
  text: PropTypes.array,
  onDismiss: PropTypes.func
}

NotificationBar.defaultProps = {
  backgroundColor: '#000',
  textColor: '#fff',
  mustHideInMobile: false,
  onDismiss: () => {}
}

export default NotificationBar
