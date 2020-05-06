import React from 'react'
import { IntlProvider } from 'react-intl'
import { Header } from 'mejuri-components-2'
import messages from './messages'
import 'mejuri-components-2/dist/index.css'


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
