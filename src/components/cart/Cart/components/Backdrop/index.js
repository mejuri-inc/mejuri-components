import { Wrapper, GlobalStyle } from './styled'
import React, { PureComponent } from 'react'

export default class Backdrop extends PureComponent {

  static noScrollClass = '--noscroll'

  componentDidMount () {
    document.documentElement.classList.add(Backdrop.noScrollClass)
  }

  componentWillUnmount () {
    document.documentElement.classList.remove(Backdrop.noScrollClass)
  }

  render () {
    return (
      <div onClick={this.props.onClick}>
        <GlobalStyle />
        <Wrapper />
      </div>
    );
  }
}
