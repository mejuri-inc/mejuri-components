import React from 'react'
import PropTypes from 'prop-types'
import { Message, Wrapper } from './styled'
import { FormattedMessage } from 'react-intl'
import TimedMessage from 'components/common/TimedMessage'

export const CouponErrorAdvice = ({ dismiss, visible }) => (
  <TimedMessage delay={5} dismiss={dismiss} visible={visible}>
    <Wrapper>
      <Message visible={visible} onClick={() => dismiss()}>
        <FormattedMessage id='cart.couponCode.doesNotExist' />
      </Message>
    </Wrapper>
  </TimedMessage>
)

CouponErrorAdvice.propTypes = {
  dismiss: PropTypes.func,
  visible: PropTypes.bool
}

CouponErrorAdvice.defaultProps = {
  dismiss: () => {},
  visible: true
}

export default CouponErrorAdvice
// const mapDispatchToProps = (dispatch) => ({
//   dismiss: () => dispatch(hideCouponCodeError())
// })
//
// export default connect(null, mapDispatchToProps)(CouponErrorAdvice)
