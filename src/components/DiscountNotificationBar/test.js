/* eslint-disable no-unused-expressions */
import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import Theme from 'themes/styled'
import { IntlProvider } from 'react-intl'

import DiscountNotificationBar from './index'

describe('DiscountNotificationBar', () => {
  it('Renders nothing if no name', () => {
    const { container } = render(<DiscountNotificationBar />)
    expect(container).toBeNull
  })

  it('Renders just fine if a name is provided', () => {
    const { container } = render(
      <IntlProvider
        locale='en'
        messages={{
          'header.notifications.discount': 'This is a notification {name}'
        }}
      >
        <ThemeProvider theme={Theme}>
          <DiscountNotificationBar name='Roger Rabbit' />
        </ThemeProvider>
      </IntlProvider>
    )

    expect(container).toMatchSnapshot()
  })
})
