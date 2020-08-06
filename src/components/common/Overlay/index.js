import React, { useRef, useEffect } from 'react'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import styled from 'styled-components'

const Layer = styled.div`
  background: white;
  bottom: 0;
  height: 100%;
  left: 0;
  opacity: 0.6;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  z-index: ${(p) => p.zIndex || 0};
`

export default function Overlay({ innerRef }) {
  const ownRef = useRef(null)

  useEffect(() => {
    disableBodyScroll(innerRef.current || ownRef.current)
    return function cleanBodyScroll() {
      enableBodyScroll(innerRef.current || ownRef.current)
    }
  })

  return <Layer innerRef={ownRef} />
}
