import React from 'react'
import PropTypes from 'prop-types'

import { Header, Options, Item, PlusMinusToggle, Menu } from './styled'

export const MobileMenuDrawer = ({ toggle, label, isOpen, options }) => {
  return (
    <Menu>
      <Header onClick={toggle}>
        {label}
        <PlusMinusToggle isOpen={isOpen} />
      </Header>
      {options && (
        <Options length={options.length} isOpen={isOpen}>
          {options.map((o) => (
            <Item key={o.slug} sub={o.type === 'subtitle'}>
              <a href={o.url} onClick={(e) => e.stopPropagation()}>
                {o.text}
              </a>
            </Item>
          ))}
        </Options>
      )}
    </Menu>
  )
}

MobileMenuDrawer.propTypes = {
  toggle: PropTypes.func,
  label: PropTypes.string,
  isOpen: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      url: PropTypes.string
    })
  )
}

export default MobileMenuDrawer
