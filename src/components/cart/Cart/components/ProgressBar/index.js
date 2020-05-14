import React from 'react'
import PropTypes from 'prop-types'

import { InnerBar, Wrapper } from './styled'

export class ProgressBar extends React.PureComponent {
  calculateCompletion = (total, progress) => {
    if (progress > total) {
      return 100
    }
    return (progress * 100) / total
  }

  render() {
    const { total, progress } = this.props
    const completion = this.calculateCompletion(total, progress)
    return (
      <Wrapper>
        <InnerBar percentage={completion} />
      </Wrapper>
    )
  }
}

ProgressBar.propTypes = {
  progress: PropTypes.number,
  total: PropTypes.number
}

export default ProgressBar
