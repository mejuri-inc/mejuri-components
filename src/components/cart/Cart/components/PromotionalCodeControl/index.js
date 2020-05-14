import React from 'react'
import PropTypes from 'prop-types'
import { ApplyButton, Input, Wrapper } from './styled'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'

export class PromotionalCodeControl extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      value: ''
    }
  }

  static propTypes = {
    intl: intlShape.isRequired,
    setCouponCode: PropTypes.func
  }

  handleChange = (ev) => {
    this.setState({
      value: ev.target.value
    })
  }

  handleApply = () => {
    const { setCouponCode } = this.props
    const { value } = this.state
    setCouponCode(value)
  }

  render() {
    const { intl } = this.props
    return (
      <Wrapper>
        <Input
          placeholder={intl.formatMessage({
            id: 'cart.couponCode.placeHolder'
          })}
          onChange={this.handleChange}
          value={this.state.value}
        />
        <ApplyButton onClick={this.handleApply}>
          <FormattedMessage id='cart.couponCode.apply' />
        </ApplyButton>
      </Wrapper>
    )
  }
}

export default injectIntl(PromotionalCodeControl)
