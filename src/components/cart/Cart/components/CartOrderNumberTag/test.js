import React from 'react'
import { render } from '@testing-library/react'
import CartOrderNumberTag from './index'

describe('CartOrderNumberTag', () => {
  it('Renders with the order number provided', () => {
    const { container } = render(
      <CartOrderNumberTag orderNumber={'M62723604QU'} />
    )

    expect(container).toMatchSnapshot()
  })
})