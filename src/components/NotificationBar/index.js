import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Wrapper, Message, Icon } from './styled'

export default class NotificationBar extends PureComponent {
  static propTypes = {
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    legend: PropTypes.array,
    collapsed: PropTypes.bool,
    setDismiss: PropTypes.func,
    id: PropTypes.string
  }

  render() {
    const {
      backgroundColor,
      color,
      legend,
      collapsed,
      setDismiss,
      id
    } = this.props
    return (
      <Wrapper backgroundColor={backgroundColor} color={color} hide={collapsed}>
        <Message color={color}>{legend}</Message>
        <Icon onClick={() => setDismiss(id)} />
      </Wrapper>
    )
  }
}

NotificationBar.defaultProps = {
  backgroundColor: '#000',
  color: '#fff',
  legend: [],
  collapsed: true,
  setDismiss: () => {}
}
