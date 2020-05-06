import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, MainSections, MainSection } from './styled'

import NavigationLayers from '../NavigationLayers'

export const Navigation = ({ sections, setActive, activeSection, layersMountingPoint }) => {
  return (
    <Wrapper>
      <MainSections>
        {sections.map(i => (
          <MainSection
            onMouseEnter={() => setActive(i.slug)}
            onClick={() => setActive(i.slug)}
            href='#'
            key={i.name}
          >
            {i.name}
          </MainSection>
        ))}
      </MainSections>
      {layersMountingPoint !== null && <NavigationLayers sections={sections} activeSection={activeSection} mountingPoint={layersMountingPoint.current} />}
    </Wrapper>
  )
}

Navigation.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string
  })),
  setActive: PropTypes.func,
  activeSection: PropTypes.string,
  layersMountingPoint: PropTypes.object
}

export default Navigation
