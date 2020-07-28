import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ColumnContent from '../ColumnContent'

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
    .filter((c) => c.fields !== undefined)
    .map((col) => {
      return (
        <Column key={col.fields && col.sys.id}>
          {col.fields &&
            col.fields.text &&
            col.fields.type !== MENU_HIDDEN_TITLE && (
              <MenuTitle>{col.fields.text}</MenuTitle>
            )}
          {col.fields && col.fields.children && (
            <ColumnContent
              config={col.fields.children}
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
  pos: PropTypes.object
}

export default LayerContent
