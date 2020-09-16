import React, { useRef, useEffect } from 'react'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import styled from 'styled-components'

const Layer = styled.div`
  background: white;
  bottom: 0;
  height: 100%;
  left: 0;
  opacity: ${(p) => p.opacity};
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  z-index: ${(p) => p.zIndex};
`

export default function Overlay({
  innerRef,
  onClickHandler,
  opacity = 0.6,
  zIndex = 0
}) {
  const ownRef = useRef(null)

  useEffect(() => {
    disableBodyScroll((innerRef && innerRef.current) || ownRef.current)
    return function cleanBodyScroll() {
      enableBodyScroll((innerRef && innerRef.current) || ownRef.current)
    }
  })

  return (
    <Layer ref={ownRef} onClick={onClickHandler} show={show} zIndex={zIndex} />
  )
}
