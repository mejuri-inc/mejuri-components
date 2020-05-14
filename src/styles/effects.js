import { css, keyframes } from 'styled-components'

const fadeInKeyframes = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

const fadeOutKeyframes = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`

const slideInKeyframes = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -30px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`

export const fadeIn = css`
  animation: ${fadeInKeyframes} 0.5s forwards ease;
`

export const fadeOut = css`
  animation: ${fadeOutKeyframes} 0.5s forwards ease;
`

const spinnerKeyframes = keyframes`
  to { transform: rotate(1turn); }
`

export const spin = css`
  animation: ${spinnerKeyframes} 0.86s cubic-bezier(0.4, 0.15, 0.6, 0.85)
    infinite;
`

export const extend = css`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

export const slideIn = css`
  animation: ${slideInKeyframes} 0.5s forwards ease-out;
`

export const overlay = (p = {}) => css`
  position: relative;

  * {
    pointer-events: none;
  }

  &::before {
    ${fadeIn}
    ${extend}
    content: '';
    position: absolute;
    background: ${p.background || 'hsla(0, 0%, 100%, 0.8)'};
    z-index: 1;
  }
`

export const spinner = (p = {}) => css`
  ${overlay(p)}

  &::after {
    ${fadeIn};
    ${spin};
    content: '';
    position: absolute;
    left: calc(50% - ${p.diameter || '30px'} / 2);
    top: calc(50% - ${p.diameter || '30px'} / 2);
    width: ${p.diameter || '30px'};
    height: ${p.diameter || '30px'};
    border-radius: 50%;
    border: ${p.border || '2px'} solid
      ${p.foreground || 'hsla(0, 0%, 0%, 0.25)'};
    border-top-color: transparent;
    z-index: 2;
  }
`
