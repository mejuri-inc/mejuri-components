import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, Item, ItemLink, Layer, Layers } from './styled'
import get from 'lodash.get'
import LayerContent from './components/LayerContent'

export const Navigation = ({
  config,
  shrinked,
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
          <Layer active={i._id === activeSection} shrinked={shrinked}>
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
