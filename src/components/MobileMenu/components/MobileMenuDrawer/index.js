import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash.get'
import { loggedInFilter, posFilter } from '../../filters'
import { Header, Options, Item, PlusMinusToggle, Menu } from './styled'

export const MobileMenuDrawer = ({
  toggle,
  label,
  isOpen,
  options,
  pos,
  isLoggedIn
}) => {
  const filteredOptions = options
    .filter(loggedInFilter(isLoggedIn))
    .filter(posFilter(pos))
  return (
    <Menu>
      <Header onClick={toggle}>
        {label}
        <PlusMinusToggle isOpen={isOpen} />
      </Header>
      {options && (
        <Options length={filteredOptions.length} isOpen={isOpen}>
          {filteredOptions.map((o) => (
            <Item key={o._id} sub={get(o, 'type') === 'subtitle'}>
              <a
                href={get(o, 'url')}
                onClick={(e) => e.stopPropagation()}
                data-h='mobile-menu-item-btn'
              >
                {get(o, 'text')}
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
  isLoggedIn: PropTypes.bool,
  pos: PropTypes.object,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      url: PropTypes.string
    })
  )
}

MobileMenuDrawer.defaultProps = {
  isLoggedIn: false,
  pos: false
}

export default MobileMenuDrawer
