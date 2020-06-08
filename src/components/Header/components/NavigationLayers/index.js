import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Layers, Layer, Column, MenuTitle, MenuItem } from './styled'

function ColumnContent({ config }) {
  return config.map((menuItem) => {
    if (!menuItem.fields) {
      return null
    }

    return (
      <MenuItem key={menuItem.fields.slug} href={`/${menuItem.fields.url}`}>
        {menuItem.fields && menuItem.fields.text}
      </MenuItem>
    )
  })
}

function LayerContent({ config }) {
  return config.map((col) => {
    return (
      <Column key={col.fields && col.fields.slug}>
        {col.fields && col.fields.text && (
          <MenuTitle>{col.fields.text}</MenuTitle>
        )}
        {col.fields && col.fields.children && (
          <ColumnContent config={col.fields.children} />
        )}
      </Column>
    )
  })
}

export const NavigationLayers = ({ config, activeSection, mountingPoint }) => {
  const layout = (
    <Layers>
      {config.map((s, i) => (
        <Layer
          key={s.fields.slug}
          active={s.fields.slug === activeSection}
          order={i}
        >
          {s.fields && s.fields.children && (
            <LayerContent config={s.fields.children} />
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
