import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Div = styled.div`
  margin-top: -${(p) => `${p.offset}px` || '0'};
  width: 1px;
`

class IsOnScreen extends React.Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
  }

  componentDidMount() {
    const { rootMargin, threshold, root, onVisible } = this.props
    // eslint-disable-next-line no-undef
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.intersectionRatio > 0.5) {
            onVisible && onVisible()
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
    return (
      <Div ref={this.ref} offset={this.props.offset}>
        {this.props.children}
      </Div>
    )
  }
}

IsOnScreen.defaultProps = {
  rootMargin: '0px',
  threshold: 1,
  root: null,
  intersectionRatio: 1,
  offset: 0
}

IsOnScreen.propTypes = {
  onVisible: PropTypes.func,
  root: PropTypes.element,
  rootMargin: PropTypes.string,
  threshold: PropTypes.number,
  children: PropTypes.node,
  offset: PropTypes.number
}

export default IsOnScreen
