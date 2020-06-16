import React from 'react'
import PropTypes from 'prop-types'
import throttle from 'lodash.throttle'

export class ScrollBreakpoint extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      breakpointReached: false
    }

    this.throttledCheckPosition = throttle(
      this.checkPosition,
      props.lapse || 500
    )
  }

  checkPosition = () => {
    const { top } = this.props
    const { breakpointReached } = this.state
    if (window.pageYOffset > top && !breakpointReached) {
      this.setState({ breakpointReached: true })
    }

    if (window.pageYOffset <= top && breakpointReached) {
      this.setState({ breakpointReached: false })
    }
  }

  componentDidMount() {
    document.addEventListener('scroll', this.throttledCheckPosition)
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.throttledCheckPosition)
  }

  render() {
    const { children } = this.props
    const { breakpointReached } = this.state
    return children(breakpointReached)
  }
}

ScrollBreakpoint.propTypes = {
  children: PropTypes.func,
  lapse: PropTypes.number,
  top: PropTypes.number.isRequired
}

export default ScrollBreakpoint
