import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { GlobalStyle, Wrapper, Backdrop, Content, CloseButton } from './styled'
import CloseIcon from 'resources/icons/CloseIcon'

class Popup extends Component {
  static propTypes = {
    children: PropTypes.node,
    showClose: PropTypes.bool,
    onBackdropClick: PropTypes.func,
    onClose: PropTypes.func
  }

  static defaultProps = {
    showClose: true,
    onBackdropClick: () => {},
    onClose: () => {}
  }

  static noScrollClass = '--noscroll'

  componentDidMount() {
    document.documentElement.classList.add(Popup.noScrollClass)
  }

  componentWillUnmount() {
    document.documentElement.classList.remove(Popup.noScrollClass)
  }

  onBackdropClick = (e) => {
    const { onClose, onBackdropClick } = this.props
    const result = onBackdropClick(e)
    if (result !== false) onClose(e)
  }

  render() {
    const { children, showClose, onClose } = this.props

    return (
      <Wrapper>
        <GlobalStyle />
        <Content>
          {children}
          {showClose && (
            <CloseButton onClick={onClose}>
              <CloseIcon size={18} />
            </CloseButton>
          )}
        </Content>
        <Backdrop onClick={this.onBackdropClick} />
      </Wrapper>
    )
  }
}

export default Popup
