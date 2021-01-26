import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import CartOrderNumberTag from './index'

describe('CartOrderNumberTag', () => {
  it('Renders with the order number provided', () => {
    const { container, getByTestId } = render(
      <CartOrderNumberTag orderNumber='order-number' />
    )

    const orderParagraph = getByTestId('order-number')

    expect(orderParagraph).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
