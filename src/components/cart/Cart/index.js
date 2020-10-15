import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import Button from 'components/common/Button'
import { MuiThemeProvider } from '@material-ui/core'
import MejuriTheme from 'themes/material'
import {
  BlockWrapper,
  Content,
  EmptyCart,
  Scrollable,
  Wrapper,
  BottomWrapper,
  BfLine
} from './styled'
import SectionLoader from 'components/common/SectionLoader'
import CartHeader from 'components/cart/Cart/components/CartHeader'
import ProgressBar from 'components/cart/Cart/components/ProgressBar'
import ItemsList from 'components/cart/Cart/components/ItemsList'
import Suggestions from 'components/cart/Cart/components/Suggestions'
import CartSummary from 'components/cart/Cart/components/CartSummary'
import CouponErrorAdvice from 'components/cart/Cart/components/CouponErrorAdvice'
import CartCoupon from 'components/cart/Cart/components/CartCoupon'
import ApplePay from 'components/ApplePay'
import Backdrop from 'components/cart/Cart/components/Backdrop'
import { toCurrency } from 'helpers/currency'

export class Cart extends PureComponent {
  handleBackdropClick = () => {
    const { cartToggle } = this.props
    cartToggle(false)
  }

  toggleZendeskWidget() {
    if (typeof window !== 'undefined') {
      try {
        if (this.props.isOpened) {
          window.zE && window.zE.hide()
        } else {
          window.zE && window.zE.show()
        }
      } catch (e) {
        console.error(e)
      }
    }
    return null
  }

  render() {
    if (!this.props.orderExists) return null

    const {
      order,
      orderToken,
      csrfToken,
      couponCodeError,
      isSomethingFetching,
      isOpened,
      lineItems,
      onContinue,
      cartToggle,
      isPos,
      removeItem,
      updateItemQuantity,
      setWalkout,
      estimatedTotal,
      subtotal,
      estimates,
      adjustments,
      setCouponCode,
      currency,
      dismissCouponCodeError,
      addSuggestionItem,
      isFetchingSuggestion,
      suggestions,
      trackEvent,
      trackIncreaseProduct,
      trackDecreaseProduct,
      trackRemoveItem,
      trackCartGoToCheckout,
      host,
      settings
    } = this.props

    const {
      freeShipping,
      total,
      progress,
      disabledFreeShipping
    } = this.props.shippingStatus

    this.toggleZendeskWidget()

    return (
      <MuiThemeProvider theme={MejuriTheme}>
        <div>
          {isOpened && <Backdrop onClick={this.handleBackdropClick} />}
          <Wrapper isOpened={isOpened}>
            <SectionLoader isFetching={isSomethingFetching}>
              <Content>
                <CartHeader
                  cartToggle={cartToggle}
                  lineItems={lineItems}
                  isOpened={isOpened}
                >
                  {!!lineItems.length && (
                    <FormattedMessage
                      id={
                        disabledFreeShipping || freeShipping
                          ? 'cart.header.freeShippingReached'
                          : 'cart.header.advice'
                      }
                      values={{ label: toCurrency(total - progress, currency) }}
                    />
                  )}
                </CartHeader>
                {!order.isBlackfriday && (
                  <ProgressBar
                    total={total}
                    progress={
                      disabledFreeShipping || freeShipping ? total : progress
                    }
                  />
                )}
                {order.isBlackfriday && <BfLine />}
                <Scrollable>
                  {lineItems.length ? (
                    <ItemsList
                      items={lineItems}
                      isPos={isPos}
                      remove={removeItem}
                      updateQuantity={updateItemQuantity}
                      setWalkout={setWalkout}
                      currency={currency}
                      trackIncreaseProduct={(context) =>
                        trackIncreaseProduct(order, context)
                      }
                      trackDecreaseProduct={(context) =>
                        trackDecreaseProduct(order, context)
                      }
                      trackRemoveItem={(context) =>
                        trackRemoveItem(order, context)
                      }
                    />
                  ) : (
                    <EmptyCart>
                      <FormattedMessage id='cart.empty' />
                    </EmptyCart>
                  )}
                  {!!lineItems.length && (
                    <Suggestions
                      addSuggestion={addSuggestionItem}
                      isFetching={isFetchingSuggestion}
                      items={suggestions}
                      lineItems={lineItems}
                    />
                  )}
                </Scrollable>
                {!!lineItems.length && (
                  <BottomWrapper>
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
                      {order['allowCoupons?'] && (
                        <CartCoupon setCouponCode={setCouponCode} />
                      )}
                      <Button
                        onClick={(...args) => {
                          trackCartGoToCheckout(order.number)
                          onContinue(...args)
                        }}
                        data-h='cart-go-to-checkout-btn'
                      >
                        <FormattedMessage id='cart.actions.continue' />
                      </Button>
                      <ApplePay
                        order={order}
                        orderToken={orderToken}
                        csrfToken={csrfToken}
                        trackEvent={trackEvent}
                        host={host}
                        settings={settings}
                      />
                    </BlockWrapper>
                  </BottomWrapper>
                )}
              </Content>
            </SectionLoader>
          </Wrapper>
        </div>
      </MuiThemeProvider>
    )
  }
}

Cart.defaultProps = {
  isOpened: false,
  trackIncreaseProduct: () =>
    console.log('trackIncreaseProduct prop missing in <Cart />'),
  trackDecreaseProduct: () =>
    console.log('trackDecreaseProduct prop missing in <Cart />'),
  trackRemoveItem: () =>
    console.log('trackRemoveItem prop missing in <Cart />'),
  trackCartGoToCheckout: () =>
    console.log('trackCartGoToCheckout prop missing in <Cart />')
}

Cart.propTypes = {
  isPos: PropTypes.bool,
  currency: PropTypes.string,
  removeItem: PropTypes.func,
  updateItemQuantity: PropTypes.func,
  setWalkout: PropTypes.func,

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
  suggestions: PropTypes.array,

  // apple pay
  order: PropTypes.object,
  trackEvent: PropTypes.func,
  makeApplePayPayment: PropTypes.func,
  calculateTaxes: PropTypes.func,

  // tracking.
  trackDecreaseProduct: PropTypes.func,
  trackIncreaseProduct: PropTypes.func,
  trackRemoveItem: PropTypes.func,

  host: PropTypes.string,
  settings: PropTypes.object
}

export default Cart
