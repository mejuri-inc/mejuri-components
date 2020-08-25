import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ColumnContent from '../ColumnContent'
import { posFilter } from 'components/MobileMenu/filters.js'

export const Column = styled.div`
  min-width: 200px;
  padding: 30px 0 50px;
  position: relative;
`

export const MenuTitle = styled.div`
  font-size: 15px;
  font-weight: 700;
  padding: 4px 0;
`

// TODO: standarize menu item types somewhere.
const MENU_HIDDEN_TITLE = 'hidden'

function LayerContent({ config, onClickTracking, pos }) {
  return config
    .filter((c) => c !== undefined)
    .filter(posFilter(pos))
    .map((col) => {
      return (
        <Column key={col && col._id}>
          {col && col.text && col.type !== MENU_HIDDEN_TITLE && (
            <MenuTitle>{col.text}</MenuTitle>
          )}
          {col && col.children && (
            <ColumnContent
              config={col.children}
              onClickTracking={onClickTracking}
              pos={pos}
            />
          )}
        </Column>
      )
    })
}

LayerContent.propTypes = {
  config: PropTypes.array,
  onClickTracking: PropTypes.func,
  pos: PropTypes.bool
}

export default LayerContent
