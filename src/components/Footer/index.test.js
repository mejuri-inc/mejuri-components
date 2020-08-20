/* eslint-disable no-unused-expressions */
import React from 'react'
import { render } from '@testing-library/react'

import Footer from './index'

describe('Footer', () => {
  it('does not break if no props', () => {
    const { container } = render(<Footer />)
    expect(container).toBeNull
  })
})
