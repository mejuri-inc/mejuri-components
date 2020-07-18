import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import get from 'lodash.get'

const MenuItem = styled.a`
  color: ${(p) => p.theme.colors.black};
  display: block;
  font-size: 15px;
  font-weight: ${(p) => p.theme.fontWeight.light};
  letter-spacing: 0.375px;
  padding: 5px 0;
  text-decoration: none;

  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.grey};
  }
`

function ColumnContent({ config, onClickTracking, pos }) {
  return config.map((menuItem) => {
    if (!menuItem.fields) return null
    const isPosOnly = get(menuItem, 'fields.extraFields.posOnly', false)
    if (isPosOnly && !pos) return null
    return (
      <MenuItem
        key={menuItem.sys.id}
        href={menuItem.fields.url}
        onClick={() => {
          onClickTracking({
            target: menuItem.fields.text.toLowerCase().split(' ').join('_')
          })
        }}
      >
        {menuItem.fields && menuItem.fields.text}
      </MenuItem>
    )
  })
}

ColumnContent.propTypes = {
  config: PropTypes.array,
  onClickTracking: PropTypes.func,
  pos: PropTypes.bool
}

export default ColumnContent
