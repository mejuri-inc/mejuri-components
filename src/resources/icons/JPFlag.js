import React from 'react'

const JPFlag = () => (
  <svg
    width='28'
    height='20'
    viewBox='0 0 28 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect
      x='0.25'
      y='0.25'
      width='27.5'
      height='19.5'
      rx='1.75'
      fill='white'
      stroke='#DADADA'
      strokeWidth='0.5'
    />
    <mask
      id='mask0'
      mask-type='alpha'
      maskUnits='userSpaceOnUse'
      x='0'
      y='0'
      width='28'
      height='20'
    >
      <rect
        x='0.5'
        y='0.5'
        width='27'
        height='19'
        rx='1.5'
        fill='white'
        stroke='white'
      />
    </mask>
    <g mask='url(#mask0)'>
      <circle cx='14' cy='10' r='6' fill='url(#paint0_linear)' />
    </g>
    <defs>
      <linearGradient
        id='paint0_linear'
        x1='8'
        y1='4'
        x2='8'
        y2='16'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#D81441' />
        <stop offset='1' stopColor='#BB0831' />
      </linearGradient>
    </defs>
  </svg>
)

export default JPFlag
