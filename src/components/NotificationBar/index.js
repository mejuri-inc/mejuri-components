import React from 'react'
import { Wrapper, Icon, Notifications } from './styled'
import { parseCookies, setCookie } from 'nookies'
import PropTypes from 'prop-types'
import get from 'lodash.get'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const storeKey = 'notificationBar'

export class NotificationBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.getInitialState()
    this.dismiss = this.dismiss.bind(this)
  }

  getInitialState() {
    const { notificationBars } = this.props
    if (!notificationBars) {
      return {
        dismissList: [],
        notificationBars: []
      }
    }

    const dismissList = this.getDismissList(notificationBars)
    const filterNotificationBars = this.notificationBarsFilterByDismiss(
      dismissList,
      notificationBars
    )
    return {
      dismissList: dismissList,
      notificationBars: filterNotificationBars
    }
  }

  getDismissList(notificationBars) {
    const newDismissList = this.getDismissListFromCookie()
    return this.addNewBarsToDismissList(newDismissList, notificationBars)
  }

  getDismissListFromCookie() {
    const jsonDismissList = parseCookies()[storeKey]
    const dismissList = jsonDismissList
      ? JSON.parse(jsonDismissList)
      : jsonDismissList
    let newDismissList
    if (dismissList) {
      newDismissList = dismissList.map(function (item) {
        if (!item.dismissTime) {
          return {
            id: item.id,
            dismiss: false,
            dismissTime: item.dismissTime
          }
        }
        const actualTime = new Date()
        const oneHour = 1000 * 60 * 60
        const actualTimeMs = actualTime.getTime()
        const dateMs = item.dismissTime
        const differenceMs = actualTimeMs - dateMs
        const differenceHours = differenceMs / oneHour
        return {
          id: item.id,
          dismiss: differenceHours < 1,
          dismissTime: item.dismissTime
        }
      })
    } else {
      newDismissList = []
    }
    return newDismissList
  }

  addNewBarsToDismissList(dismissList, notificationBars) {
    const newNotificationsBars = notificationBars.filter(function (bar) {
      return (
        dismissList.findIndex((element) => element.id === bar.identifier) < 0
      )
    })
    const newDismissListElements = newNotificationsBars.map(function (bar) {
      return {
        id: bar.identifier,
        dismiss: false,
        dismissTime: null
      }
    })
    const newDismissList = dismissList.concat(newDismissListElements)
    this.saveCookie(newDismissList)
    return newDismissList
  }

  saveCookie(dismissList) {
    const jsonDismissList = JSON.stringify(dismissList)
    setCookie(null, storeKey, jsonDismissList, {})
  }

  notificationBarsFilterByDismiss(dismissList, notificationBars) {
    const areDismissList = dismissList.filter(function (item) {
      return item.dismiss
    })
    const dismissIds = areDismissList.map(function (item) {
      return item.id
    })
    return notificationBars.filter(function (item) {
      return dismissIds.findIndex((element) => element === item.identifier) < 0
    })
  }

  dismiss(id) {
    const { dismissList, notificationBars } = this.state
    const newDismissList = dismissList.map(function (item) {
      return {
        id: item.id,
        dismiss: item.id === id ? true : item.dismiss,
        dismissTime: item.id === id ? new Date().getTime() : item.dismissTime
      }
    })
    const newNotificationBars = this.notificationBarsFilterByDismiss(
      newDismissList,
      notificationBars
    )
    this.setState({
      dismissList: newDismissList,
      notificationBars: newNotificationBars
    })
    this.saveCookie(newDismissList)
  }

  formatText(legend) {
    const formatLegend = documentToReactComponents(legend)
    const text = get(formatLegend, '[0].props.children', [])
    return text
  }

  render() {
    const { currentLocale } = this.props
    const { notificationBars } = this.state
    if (notificationBars.length === 0) return null

    const filtered = notificationBars.filter(n => !n.fields.exclusiveLocales || (n.fields.exclusiveLocales && n.fields.exclusiveLocales.find(l => l === currentLocale.code)))

    return (
      <Notifications>
        {filtered.map((bar) => (
          <Wrapper
            backgroundColor={bar.fields.backgroundColor}
            color={bar.fields.textColor}
            hide={bar.fields.collapsed}
            key={bar.fields.identifier}
          >
            {this.formatText(bar.fields.legend)}
            <Icon
              onClick={() => this.dismiss(bar.identifier)}
              color={bar.color}
            />
          </Wrapper>
        ))}
      </Notifications>
    )
  }
}

NotificationBar.propTypes = {
  notificationBars: PropTypes.array,
  currentLocale: PropTypes.object
}

NotificationBar.defaultProps = {
  notificationBars: [],
  currentLocale: { code: '' }
}

export default NotificationBar
