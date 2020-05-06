import React from 'react'
import { IntlProvider } from 'react-intl'
import { Header } from 'mejuri-components'
import messages from './messages'

const App = () => {
  const user = { "isGuest" : false, "nameOrEmail" : "joa"};
  return (
    <IntlProvider locale="en" messages={messages['en']}>
      <div>
        <Header
          isDesktop={() => true}
          cartItemsCount={10}
          user={user}
          />

        <Header
          isDesktop={() => false}
          cartItemsCount={10}
          user={user}
          />
      </div>
    </IntlProvider>)

}

export default App
