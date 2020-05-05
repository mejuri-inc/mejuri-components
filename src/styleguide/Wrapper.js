import React, { Component } from 'react'
import { IntlProvider } from 'react-intl'
import messages from './messages'

export default class Wrapper extends Component {
  render() {
    return (
      <IntlProvider locale="en" messages={messages['en']}>{this.props.children}</IntlProvider>
    )
  }
}