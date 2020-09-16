import React, { createRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Content, Wrapper } from './styled'

function StickyContainer({ children }) {
  const r = createRef()
  const [initialPosition, setInitialPosition] = useState()
  const [isStick, setIsStick] = useState(false)
  const [height, setHeight] = useState('auto')
  useEffect(() => {
    const scroll = () => {
      if (window.scrollY >= initialPosition && !isStick) {
        setIsStick(true)
      }
      if (window.scrollY < initialPosition && isStick) {
        setIsStick(false)
      }
    }

    // Set the position from where the elem starts being sticky
    setInitialPosition((r.current && r.current.offsetTop) || 0)

    // Check if the page is already scrolled when load
    if (initialPosition && window.scrollY > initialPosition && !isStick) {
      setIsStick(true)
    }

    // Get the height so we avoid the "jump" when position relative -> fixed
    const rect = (r.current && r.current.getBoundingClientRect()) || {
      height: 'auto'
    }
    setHeight(rect.height)
    document.addEventListener('scroll', scroll)

    return () => document.removeEventListener('scroll', scroll)
  }, [initialPosition, isStick, height])

  return (
    <Wrapper ref={r} height={height}>
      <Content stick={isStick} data-h='header-visible'>
        {children}
      </Content>
    </Wrapper>
  )
}

StickyContainer.propTypes = {
  children: PropTypes.node
}

export default StickyContainer
