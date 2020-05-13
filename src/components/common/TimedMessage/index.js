import { PureComponent } from 'react'
import PropTypes from 'prop-types'

export class TimedMessage extends PureComponent {
  constructor (props) {
    super(props)

    this.timeout = null
  }

  componentDidUpdate (prevProps) {
    if (prevProps.visible === false && this.props.visible === true) {
      if (this.timeout) {
        clearTimeout(this.timeout)
      }
      this.timeout = setTimeout(() => {
        this.props.dismiss()
        this.timeout = null
      }, this.props.delay * 1000)
    }
  }

  render () {
    return this.props.children
  }
}

TimedMessage.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number,
  dismiss: PropTypes.func,
  visible: PropTypes.bool
}

TimedMessage.defaultProps = {
  delay: 5,
  dismiss: () => {},
  visible: false
}

export default TimedMessage
