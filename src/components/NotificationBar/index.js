import React from 'react'
import { Wrapper, Message, Icon } from './styled'

const NotificationBar = (props) => {
  const { backgroundColor, color, legend, collapsed, setDismiss, id } = props
  return (
    <Wrapper backgroundColor={backgroundColor} color={color} hide={collapsed}>
      <Message color={color}>{legend}</Message>
      <Icon onClick={() => setDismiss(id)} />
    </Wrapper>
  )
}

NotificationBar.defaultProps = {
  backgroundColor: '#000',
  color: '#fff',
  legend: [],
  collapsed: true,
  setDismiss: () => {}
}

export default NotificationBar
