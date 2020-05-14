import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Layers, Layer, Column, MenuTitle, MenuItem } from './styled'

export const NavigationLayers = ({
  activeSection,
  sections,
  mountingPoint
}) => {
  const layout = (
    <Layers>
      {sections.map((s, i) => (
        <Layer key={s.slug} active={s.slug === activeSection} order={i}>
          {s.children.map((col) => (
            <Column key={col.slug}>
              <MenuTitle>{col.name}</MenuTitle>
              {col.children.map((menuItem) => (
                <MenuItem key={menuItem.slug} href={menuItem.url}>
                  {menuItem.name}
                </MenuItem>
              ))}
            </Column>
          ))}
        </Layer>
      ))}
    </Layers>
  )

  if (!mountingPoint) return layout

  return ReactDOM.createPortal(layout, mountingPoint)
}

NavigationLayers.propTypes = {
  menuItems: PropTypes.shape({
    sections: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        url: PropTypes.string,
        children: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string,
            children: PropTypes.arrayOf(
              PropTypes.shape({
                name: PropTypes.string,
                url: PropTypes.string
              })
            )
          })
        )
      })
    )
  }),
  activeSection: PropTypes.string,
  mountingPoint: PropTypes.object
}

export default NavigationLayers
