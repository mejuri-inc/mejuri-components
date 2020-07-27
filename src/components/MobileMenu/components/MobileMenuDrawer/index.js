import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash.get'

import { Header, Options, Item, PlusMinusToggle, Menu } from './styled'

export const filterOptions = (options, pos) => {
  if (pos) return options
  return options.filter(function (o) {
    const isPosOnly = get(o, 'fields.extraFields.posOnly', false)
    return !isPosOnly
  })
}

export const MobileMenuDrawer = ({ toggle, label, isOpen, options, pos }) => {
  return (
    <Menu>
      <Header onClick={toggle}>
        {label}
        <PlusMinusToggle isOpen={isOpen} />
      </Header>
      {options && (
        <Options length={filterOptions(options, pos).length} isOpen={isOpen}>
          {filterOptions(options, pos).map((o) => (
            <Item key={o.sys.id} sub={get(o, 'fields.type') === 'subtitle'}>
              <a
                href={get(o, 'fields.url')}
                onClick={(e) => e.stopPropagation()}
                data-h='mobile-menu-item-btn'
              >
                {get(o, 'fields.text')}
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
  pos: PropTypes.object,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      url: PropTypes.string
    })
  )
}

export default MobileMenuDrawer
