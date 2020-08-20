import React from 'react'
import { Notifications } from './styled'
import PropTypes from 'prop-types'
import get from 'lodash.get'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import NotificationBar from './NotificationBar'
/* global localStorage */

const storeKey = 'mj-notification-bar'

export class NotificationsBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dismissList: [],
      notificationBars: []
    }
    this.dismiss = this.dismiss.bind(this)
  }

  componentDidMount() {
    const newState = this.getInitialState()
    this.setState({
      dismissList: newState.dismissList,
      notificationBars: newState.notificationBars
    })
  }

  getInitialState() {
    const { notificationBars } = this.props
    if (!notificationBars) {
      return {
        dismissList: [],
        notificationBars: []
      }
    }

    const dismissList = this.loadDismissList()
    const filterNotificationBars = this.notificationBarsFilterByDismiss(
      dismissList,
      notificationBars
    )
    return {
      dismissList: dismissList,
      notificationBars: filterNotificationBars
    }
  }

  loadDismissList() {
    const dismissList = JSON.parse(localStorage.getItem(storeKey))
    if (!dismissList) return []
    const newDismissList = dismissList.filter(function (item) {
      const actualTime = new Date()
      const oneHour = 1000 * 60 * 60
      const actualTimeMs = actualTime.getTime()
      const dateMs = item.time
      const differenceMs = actualTimeMs - dateMs
      const differenceHours = differenceMs / oneHour
      return differenceHours < 1
    })
    this.saveDismissList(newDismissList)
    return newDismissList
  }

  saveDismissList(dismissList) {
    localStorage.removeItem(storeKey)
    localStorage.setItem(storeKey, JSON.stringify(dismissList))
  }

  notificationBarsFilterByDismiss(dismissList, notificationBars) {
    const newNotificationBars = notificationBars.filter(function (
      notification
    ) {
      return (
        dismissList.findIndex(
          (element) => element.id === notification.fields.identifier
        ) < 0
      )
    })
    return newNotificationBars
  }

  dismiss(id) {
    const { dismissList, notificationBars } = this.state
    const actualTime = new Date().getTime()
    const newDismissItem = {
      id: id,
      time: actualTime
    }
    const newDismissList = dismissList.concat(newDismissItem)
    this.saveDismissList(newDismissList)
    const newNotificationBars = this.notificationBarsFilterByDismiss(
      newDismissList,
      notificationBars
    )
    this.setState({
      dismissList: newDismissList,
      notificationBars: newNotificationBars
    })
  }

  formatText(legend) {
    const formatLegend = documentToReactComponents(legend)
    const text = get(formatLegend, '[0].props.children', [])
    return text
  }

  render() {
    const { notificationBars } = this.state
    if (!notificationBars || notificationBars.length === 0) return null
    return (
      <Notifications>
        {notificationBars.map((bar) => (
          <NotificationBar
            backgroundColor={bar.fields.backgroundColor}
            textColor={bar.fields.textColor}
            mustHideInMobile={bar.fields.collapsed}
            key={bar.fields.identifier}
            text={this.formatText(bar.fields.legend)}
            onDismiss={this.dismiss}
            identifier={bar.fields.identifier}
          />
        ))}
      </Notifications>
    )
  }
}

NotificationsBar.propTypes = {
  notificationBars: PropTypes.array
}

NotificationsBar.defaultProps = {
  notificationBars: []
}

export default NotificationsBar
