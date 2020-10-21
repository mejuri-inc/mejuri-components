import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { posFilter } from 'components/MobileMenu/filters.js'

const MenuItem = styled.a`
  color: ${(p) => p.theme.colors.black};
  display: block;
  font-size: 15px;
  font-weight: ${(p) => p.theme.fontWeight.light};
  height: 32px;
  letter-spacing: 0.375px;
  padding: 5px 0;
  text-decoration: none;

  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.grey};
  }
`

function ColumnContent({ config, onClickTracking, pos }) {
  return config.filter(posFilter(pos)).map((menuItem) => {
    if (!menuItem || !menuItem.text) return null
    return (
      <MenuItem
        key={menuItem._id}
        href={menuItem.url}
        onClick={() => {
          onClickTracking({
            target: menuItem.text.toLowerCase().split(' ').join('_')
          })
        }}
        data-h='header-left-navigation-menu-btn'
      >
        {menuItem.text}
      </MenuItem>
    )
  })
}

ColumnContent.propTypes = {
  config: PropTypes.array,
  onClickTracking: PropTypes.func,
  pos: PropTypes.bool
}

ColumnContent.defaultProps = {
  pos: false
}

export default ColumnContent
