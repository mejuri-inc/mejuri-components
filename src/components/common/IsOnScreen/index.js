import React from 'react'
import PropTypes from 'prop-types'

class IsOnScreen extends React.Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
  }

  componentDidMount() {
    const { rootMargin, threshold, root, onVisible } = this.props
    let itsLeaving = false
    // eslint-disable-next-line no-undef
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting === true) {
            itsLeaving && onVisible && onVisible()
            itsLeaving = true
          }
        })
      },
      {
        root,
        rootMargin,
        threshold
      }
    )

    if (this.ref.current) {
      obs.observe(this.ref.current)
    }
  }

  render() {
    return <div ref={this.ref}>{this.props.children}</div>
  }
}

IsOnScreen.defaultProps = {
  rootMargin: '0px',
  threshold: 1,
  root: null,
  intersectionRatio: 1
}

IsOnScreen.propTypes = {
  onVisible: PropTypes.func,
  root: PropTypes.oneOfType([PropTypes.element, null]),
  rootMargin: PropTypes.string,
  threshold: PropTypes.number,
  children: PropTypes.node
}

export default IsOnScreen
