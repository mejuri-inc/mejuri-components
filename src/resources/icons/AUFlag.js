/* eslint-disable react/no-unknown-property */
import React from 'react'

const AUFlag = () => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10080 5040'>
    <defs>
      <path
        id='prefix__a'
        d='M0-360l69.421 215.845 212.038-80.301L155.99-35.603l194.985 115.71-225.881 19.651 31.105 224.59L0 160l-156.198 164.349 31.105-224.59-225.881-19.651 194.986-115.711-125.471-188.853 212.038 80.301z'
      />
      <path
        id='prefix__d'
        d='M0-210L54.86-75.508l144.862 10.614L88.765 28.842l34.67 141.052L0 93.334l-123.435 76.56 34.67-141.052-110.957-93.736L-54.86-75.508z'
      />
      <clipPath id='prefix__b'>
        <path d='M0 0v1.5h7V3H6zm6 0H3v3.5H0V3z' />
      </clipPath>
      <use id='prefix__c' transform='scale(2.1)' href='#prefix__a' />
    </defs>
    <path fill='#00008b' d='M0 0h10080v5040H0z' />
    <path stroke='#fff' stroke-width='504' d='M0 0l5040 2520m0-2520L0 2520' />
    <path
      stroke='red'
      stroke-width='.4'
      d='M0 0l6 3m0-3L0 3'
      clip-path='url(#prefix__b)'
      transform='scale(840)'
    />
    <path stroke='#fff' stroke-width='840' d='M2520 0v2940M0 1260h5880' />
    <path stroke='red' stroke-width='504' d='M2520 0v2940M0 1260h5880' />
    <path fill='#00008b' d='M0 2520h5040V0h1680v3360H0z' />
    <g fill='#fff'>
      <use x='2520' y='3780' href='#prefix__c' />
      <use x='7560' y='4200' href='#prefix__a' />
      <use x='6300' y='2205' href='#prefix__a' />
      <use x='7560' y='840' href='#prefix__a' />
      <use x='8680' y='1869' href='#prefix__a' />
      <use x='8064' y='2730' href='#prefix__d' />
    </g>
  </svg>
)

export default AUFlag
