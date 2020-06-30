import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Layers, Layer, Column, MenuTitle, MenuItem } from './styled'
import get from 'lodash.get'

function ColumnContent({ config, onClickTracking, pos }) {
  return config.map((menuItem) => {
    if (!menuItem.fields) return null
    const isPosOnly = get(menuItem, 'fields.extraFields.posOnly', false)
    if (isPosOnly && !pos) return null
    return (
      <MenuItem
        key={menuItem.sys.id}
        onClick={() => {
          onClickTracking({
            target: menuItem.fields.text.toLowerCase().split(' ').join('_')
          })
          setTimeout(() => (window.location = `${menuItem.fields.url}`), 1)
        }}
      >
        {menuItem.fields && menuItem.fields.text}
      </MenuItem>
    )
  })
}

function LayerContent({ config, onClickTracking, hasTitle, pos }) {
  return hasTitle ? (
    <Column key={config.fields && config.sys.id}>
      <ColumnContent config={config} onClickTracking={onClickTracking} />
    </Column>
  ) : (
    config
      .filter((c) => c.fields !== undefined)
      .map((col) => {
        return (
          <Column key={col.fields && col.sys.id}>
            {col.fields && col.fields.text && (
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
  )
}

export const NavigationLayers = ({
  config,
  activeSection,
  mountingPoint,
  onClickTracking,
  pos
}) => {
  // TODO: Temporary to avoid cms app to break bc of outdated data format.
  if (!config || !Array.isArray(config)) {
    return null
  }
  const layout = (
    <Layers>
      {config.map((s, i) => (
        <Layer key={s.sys.id} active={s.sys.id === activeSection} order={i}>
          {s.fields && s.fields.children && (
            <LayerContent
              config={s.fields.children}
              onClickTracking={onClickTracking}
              hasTitle={get(s, 'fields.extraFields.noTitle', null)}
              pos={pos}
            />
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
