import React from 'react'
import styled from 'styled-components'
import {Button as MuiButton} from '@material-ui/core'
import { spinner } from 'styles/effects'

export const Button = styled(({ isFetching, ...p }) => (
  <MuiButton {...p} />
)).attrs(() => ({
  variant: 'contained',
  color: 'primary'
}))`
  ${({ isFetching }) => isFetching && spinner({ foreground: '#000' })}
`

Button.displayName = 'Button'

export default Button
