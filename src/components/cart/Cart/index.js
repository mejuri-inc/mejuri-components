import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import Button from 'components/common/Button'
import {
  Backdrop,
  BlockWrapper,
  Content,
  EmptyCart,
  Scrollable,
  Wrapper
} from './styled'
import SectionLoader from 'components/common/SectionLoader'
import CartHeader from 'components/cart/Cart/components/CartHeader'
import ProgressBar from 'components/cart/Cart/components/ProgressBar'
import ItemsList from 'components/cart/Cart/components/ItemsList'
import Suggestions from 'components/cart/Cart/components/Suggestions'
import CartSummary from 'components/cart/Cart/components/CartSummary'
import CouponErrorAdvice from 'components/cart/Cart/components/CouponErrorAdvice'
import CartCoupon from 'components/cart/Cart/components/CartCoupon'

export class Cart extends PureComponent {
  static propTypes = {
    isPos: PropTypes.bool,
    currency: PropTypes.string,
    removeItem: PropTypes.func,
    updateItemQuantity: PropTypes.func,
    setPickup: PropTypes.func,

    isSomethingFetching: PropTypes.bool,
    isOpened: PropTypes.bool,
    lineItems: PropTypes.array,
    orderExists: PropTypes.bool,
    shippingStatus: PropTypes.object,

    cartToggle: PropTypes.func,
    onContinue: PropTypes.func,

    estimatedTotal: PropTypes.string,
    subtotal: PropTypes.string,
    adjustments: PropTypes.array,
    estimates: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string,
        amount: PropTypes.number,
        label: PropTypes.string,
        currency: PropTypes.string,
        displayAmount: PropTypes.string,
        eligible: PropTypes.bool,
        id: PropTypes.string
      })
    ),
    // coupon
    setCouponCode: PropTypes.func,
    // couponError
    couponCodeError: PropTypes.bool,
    dismissCouponCodeError: PropTypes.func,

    // suggestions
    addSuggestionItem: PropTypes.func,
    isFetchingSuggestion: PropTypes.bool,
    suggestions: PropTypes.array
  }

  static defaultProps = {
    isOpened: false
  }

  handleBackdropClick = () => {
    const { cartToggle } = this.props

    cartToggle(false)
  }

  render() {
    if (!this.props.orderExists) return null

    const {
      couponCodeError,
      isSomethingFetching,
      isOpened,
      lineItems,
      onContinue,
      cartToggle,
      isPos,
      removeItem,
      updateItemQuantity,
      setPickup,
      estimatedTotal,
      subtotal,
      estimates,
      adjustments,
      setCouponCode,
      currency,
      dismissCouponCodeError,
      addSuggestionItem,
      isFetchingSuggestion,
      suggestions
    } = this.props
    const { freeShipping, total, progress } = this.props.shippingStatus

    return (
      <div>
        {isOpened && <Backdrop onClick={this.handleBackdropClick} />}
        <Wrapper isOpened={isOpened}>
          <SectionLoader isFetching={isSomethingFetching}>
            <Content>
              <CartHeader cartToggle={cartToggle} lineItems={lineItems}>
                {!!lineItems.length && (
                  <FormattedMessage
                    id={
                      freeShipping
                        ? 'cart.header.freeShippingReached'
                        : 'cart.header.advice'
                    }
                    values={{ label: total - progress }}
                  />
                )}
              </CartHeader>
              <ProgressBar total={total} progress={progress} />
              <Scrollable>
                {lineItems.length ? (
                  <ItemsList
                    items={lineItems}
                    isPos={isPos}
                    remove={removeItem}
                    updateQuantity={updateItemQuantity}
                    setPickup={setPickup}
                    currency={currency}
                  />
                ) : (
                  <EmptyCart>
                    <FormattedMessage id='cart.empty' />
                  </EmptyCart>
                )}
                <Suggestions
                  addSuggestion={addSuggestionItem}
                  isFetching={isFetchingSuggestion}
                  items={suggestions}
                />
              </Scrollable>
              {!!lineItems.length && (
                <div>
                  <CartSummary
                    currency={currency}
                    subtotal={subtotal}
                    estimatedTotal={estimatedTotal}
                    estimates={estimates}
                    adjustments={adjustments}
                  />
                  <BlockWrapper>
                    <CouponErrorAdvice
                      visible={couponCodeError}
                      dismiss={dismissCouponCodeError}
                    />
                    <CartCoupon setCouponCode={setCouponCode} />
                    <Button onClick={onContinue}>
                      <FormattedMessage id='cart.actions.continue' />
                    </Button>
                  </BlockWrapper>
                </div>
              )}
            </Content>
          </SectionLoader>
        </Wrapper>
      </div>
    )
  }
}
export default Cart
