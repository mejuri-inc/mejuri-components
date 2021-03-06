import React from 'react'
import PropTypes from 'prop-types'
import { ApplyButton, Input, Wrapper } from './styled'
import { injectIntl, intlShape } from 'react-intl'
import FormattedMessageWithLoader from 'components/FormattedMessageWithLoader'

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
          data-h='cart-coupon-input'
        />
        <ApplyButton onClick={this.handleApply} data-h='cart-coupon-btn'>
          <FormattedMessageWithLoader id='cart.couponCode.apply' />
        </ApplyButton>
      </Wrapper>
    )
  }
}

export default injectIntl(PromotionalCodeControl)
