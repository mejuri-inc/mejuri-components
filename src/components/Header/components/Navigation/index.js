import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, MainSections, MainSection } from './styled'
import get from 'lodash.get'

import NavigationLayers from '../NavigationLayers'

export const Navigation = ({
  config,
  sections,
  setActive,
  activeSection,
  layersMountingPoint,
  onClickTracking,
  pos
}) => {
  // TODO: Temporary to avoid cms app to break bc of outdated data format.
  if (!config || !Array.isArray(config)) {
    return <Wrapper />
  }
  return (
    <Wrapper>
      <MainSections>
        {config.map(
          (i) =>
            i.fields && (
              <MainSection
                onMouseEnter={() => setActive(i.sys.id)}
                onClick={() => setActive(i.sys.id)}
                href={get(i, 'fields.url') ? i.fields.url : '#'}
                key={i.sys.id}
              >
                {i.fields.text}
              </MainSection>
            )
        )}
      </MainSections>
      {layersMountingPoint !== null && (
        <NavigationLayers
          config={config}
          sections={sections}
          activeSection={activeSection}
          mountingPoint={layersMountingPoint.current}
          onClickTracking={onClickTracking}
          pos={pos}
        />
      )}
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
  layersMountingPoint: PropTypes.object,
  pos: PropTypes.object
}

export default Navigation
