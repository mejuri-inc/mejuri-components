import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, MainSections, Item, ItemLink, Layer, Layers } from './styled'
import get from 'lodash.get'
import LayerContent from './components/LayerContent'

export const Navigation = ({
  config,
  setActive,
  activeSection,
  onClickTracking,
  pos
}) => {
  if (!config) {
    return <Wrapper />
  }

  return (
    <Wrapper>
      <MainSections>
        {config.map(
          (i) =>
            i.fields && (
              <Item
                onMouseEnter={() => setActive(i.sys.id)}
                onClick={() => setActive(i.sys.id)}
                key={i.sys.id}
              >
                <ItemLink href={get(i, 'fields.url') ? i.fields.url : '#'} data-h='header-left-navigation-btn' >
                  {i.fields.text}
                </ItemLink>
                <Layer active={i.sys.id === activeSection}>
                  <Layers active={i.sys.id === activeSection} />
                  {i.fields && i.fields.children && (
                    <LayerContent
                      config={i.fields.children}
                      onClickTracking={onClickTracking}
                      pos={pos}
                    />
                  )}
                </Layer>
              </Item>
            )
        )}
      </MainSections>
    </Wrapper>
  )
}

Navigation.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string
    })
  ),
  setActive: PropTypes.func,
  onClickTracking: PropTypes.func,
  activeSection: PropTypes.string,
  pos: PropTypes.object
}

export default Navigation
