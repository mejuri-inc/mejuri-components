import React from 'react'
import FormattedMessageWithLoader from 'components/FormattedMessageWithLoader'
import { UnderlinedButtonLink, Wrapper } from './styled'
import PromotionalCodeControl from '../PromotionalCodeControl'
import PropTypes from 'prop-types'

export class CartCoupon extends React.PureComponent {
  static propTypes = {
    setCouponCode: PropTypes.func
  }

  constructor(props) {
    super(props)

    this.state = {
      collapsed: true
    }
  }

  render() {
    const { collapsed } = this.state
    const { setCouponCode } = this.props
    return (
      <Wrapper>
        {collapsed ? (
          <UnderlinedButtonLink
            onClick={() => {
              this.setState({ collapsed: false })
            }}
          >
            <FormattedMessageWithLoader id='cart.couponCode.legend' />
          </UnderlinedButtonLink>
        ) : (
          <PromotionalCodeControl setCouponCode={setCouponCode} />
        )}
      </Wrapper>
    )
  }
}

export default CartCoupon
