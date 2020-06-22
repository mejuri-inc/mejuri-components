import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, MainSections, MainSection } from './styled'

import NavigationLayers from '../NavigationLayers'

export const Navigation = ({
  config,
  sections,
  setActive,
  activeSection,
  layersMountingPoint,
  onClickTracking
}) => {
  // TODO: Temporary to avoid cms app to break bc of outdated data format.
  if (!config || !Array.isArray(config)) {
    return <Wrapper />
  }
  return (
    <Wrapper>
      <MainSections>
        {config.map((i) => (
          <MainSection
            onMouseEnter={() => setActive(i.fields.slug)}
            onClick={() => setActive(i.fields.slug)}
            href='#'
            key={i.fields.text}
          >
            {i.fields.text}
          </MainSection>
        ))}
      </MainSections>
      {layersMountingPoint !== null && (
        <NavigationLayers
          config={config}
          sections={sections}
          activeSection={activeSection}
          mountingPoint={layersMountingPoint.current}
          onClickTracking={onClickTracking}
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
  layersMountingPoint: PropTypes.object
}

export default Navigation
