import React from 'react'
import { render } from '@testing-library/react'
import 'jest-styled-components'
import StickyContainer from './index'

describe('StickyContainer', () => {
  it('renders ok', () => {
    const { container } = render(<StickyContainer />)
    expect(container).toMatchSnapshot()
  })

  it('renders children', () => {
    const SomeComponent = () => <div data-test-id='i-am-the-child' />

    const { queryByTestId } = render(
      <StickyContainer>
        <SomeComponent />
      </StickyContainer>
    )

    expect(queryByTestId('i-am-the-child')).toBeDefined()
  })
})
