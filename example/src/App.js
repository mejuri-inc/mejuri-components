import React, { useState } from 'react'
import { IntlProvider } from 'react-intl'
import { Header, Cart, MejuriTheme, NotificationBar } from 'mejuri-components'
import messages from './messages'
import { MuiThemeProvider } from '@material-ui/core'
import { mockLineItems } from './mocks/mock'

const App = () => {

  const [isCartOpened, setIsCartOpened]= useState(true)

  const user = { "isGuest" : false, "nameOrEmail" : "joa"};
  return (
    <IntlProvider locale="en" messages={messages['en']}>
      <MuiThemeProvider theme={MejuriTheme}>
        <div>
          <Header
            isDesktop={() => true}
            cartItemsCount={10}
            user={user}
            cartToggle={() => setIsCartOpened(true)}
          />
          <NotificationBarWrapper />
          <Header
            isDesktop={() => false}
            cartItemsCount={10}
            user={user}
            cartToggle={() => setIsCartOpened(true)}
          />

          <CartTestWrapper opened={isCartOpened} setOpened={setIsCartOpened}/>
        </div>
      </MuiThemeProvider>
    </IntlProvider>)

}

export default App

const shippingStatus = {
  freeShipping: false,
  total: 10,
  progress: 8
}

const CartTestWrapper = ({opened, setOpened}) => {
  const [couponError, setCouponError]= useState(true)

  return (
    <Cart
      isOpened={opened}
      setCurrentOrder={() => {}}
      loadSuggestions={() => {}}
      cartToggle={setOpened}
      orderExists={true}
      shippingStatus={shippingStatus}
      lineItems={mockLineItems}
      isPos={false}
      currency={"USD"}
      removeItem={(itemId) => {}}
      updateItemQuantity={(itemId, quantity) => {}}
      setPickup={(itemId, quantity, pickUp) => {}}
      couponCodeError={couponError}
      dismissCouponCodeError={() => setCouponError(false)}
      suggestions={[]}
      addSuggestionItem={(itemId) => {}}
      isFetchingSuggestion={true}
    />
  )
}

const legend = ["this is a fucking remixxxxxx"]
const notificationBar = {
  backgroundColor: "#000",
  collapsed: true,
  legend: legend,
  textColor: "#fff"
}

const NotificationBarWrapper = () => {
  return (
    <NotificationBar
      backgroundColor={notificationBar.backgroundColor}
      color={notificationBar.textColor}
      collapsed={notificationBar.collapsed}
      legend={notificationBar.legend}
    />
  )
}
