import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Layers, Layer, Column, MenuTitle, MenuItem } from './styled'

function ColumnContent({ config, onClickTracking }) {
  return config.map((menuItem) => {
    if (!menuItem.fields) {
      return null
    }

    return (
      <MenuItem
        key={menuItem.fields.slug}
        onClick={() => {
          onClickTracking({ target: menuItem.fields.text.toLowerCase().split(' ').join('_')})
          setTimeout(() => window.location = `${menuItem.fields.url}`, 1)
        }} >
        {menuItem.fields && menuItem.fields.text}
      </MenuItem>
    )
  })
}

function LayerContent({ config, onClickTracking }) {
  return config.filter(c => c.fields !== undefined).map((col) => {
    return (
      <Column key={col.fields && col.fields.slug}>
        {col.fields && col.fields.text && (
          <MenuTitle>{col.fields.text}</MenuTitle>
        )}
        {col.fields && col.fields.children && (
          <ColumnContent config={col.fields.children} onClickTracking={onClickTracking} />
        )}
      </Column>
    )
  })
}

export const NavigationLayers = ({ config, activeSection, mountingPoint, onClickTracking }) => {
  // TODO: Temporary to avoid cms app to break bc of outdated data format.
  if (!config || !Array.isArray(config)) {
    return null
  }
  const layout = (
    <Layers>
      {config.map((s, i) => (
        <Layer
          key={s.fields.slug}
          active={s.fields.slug === activeSection}
          order={i}
        >
          {s.fields && s.fields.children && (
            <LayerContent config={s.fields.children} onClickTracking={onClickTracking}/>
          )}
        </Layer>
      ))}
    </Layers>
  )

  if (!mountingPoint) return layout

  return ReactDOM.createPortal(layout, mountingPoint)
}

NavigationLayers.propTypes = {
  activeSection: PropTypes.string,
  mountingPoint: PropTypes.object
}

export default NavigationLayers
