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
        {config.map((i) => (
          <Item
            onMouseEnter={() => setActive(i._id)}
            onClick={() => setActive(i._id)}
            key={i._id}
          >
            <ItemLink
              href={get(i, 'url') ? i.url : '#'}
              data-h='header-left-navigation-btn'
            >
              {i.text}
            </ItemLink>
            <Layer active={i._id === activeSection}>
              <Layers active={i._id === activeSection} />
              {i.children && (
                <LayerContent
                  config={i.children}
                  onClickTracking={onClickTracking}
                  pos={pos}
                />
              )}
            </Layer>
          </Item>
        ))}
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
  pos: PropTypes.bool
}

export default Navigation
