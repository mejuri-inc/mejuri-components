import React from 'react'
import PropTypes from 'prop-types'
import { Content, Wrapper } from './styled'

class StickyContainer extends React.Component {
  constructor(props) {
    super(props)
    this.r = React.createRef()

    this.state = {
      sticked: false,
      stickPosition: null,
      height: null
    }

    this.scroll = this.scroll.bind(this)
  }

  calculate = (cb) => {
    const rect = this.r.current.getBoundingClientRect()
    this.setState(
      {
        stickPosition: rect.y,
        height: rect.height
      },
      cb()
    )
  }

  scroll(e) {
    const { sticked, stickPosition } = this.state
    if (window.scrollY >= stickPosition && !sticked) {
      this.setState({ sticked: true })
    }
    if (window.scrollY < stickPosition && sticked) {
      this.setState({ sticked: false })
    }
  }

  componentDidMount() {
    this.calculate(() => {
      window && window.addEventListener('scroll', this.scroll)
    })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scroll)
  }

  render() {
    const { height, sticked } = this.state
    return (
      <Wrapper ref={this.r} height={height}>
        <Content sticked={sticked}>{this.props.children}</Content>
      </Wrapper>
    )
  }
}

StickyContainer.propTypes = {
  children: PropTypes.node
}

export default StickyContainer
