import React from 'react'
import { FormattedMessage } from 'react-intl'
import styled, { keyframes } from 'styled-components'

const placeHolderShimmer = keyframes`
    0%{
        background-position: -200px 0
    }
    100%{
        background-position: 200px 0
    }
`

const Loader = styled.div`
  width: ${({ width = 100 }) => width}px;
  height: ${({ height = 20 }) => height}px;
  animation-duration: 1.25s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: ${placeHolderShimmer};
  animation-timing-function: linear;
  background: darkgray;
  background: linear-gradient(to right, #eeeeee 10%, #dddddd 18%, #eeeeee 33%);
  background-size: 800px 104px;
`

function FormattedMessageWithLoader(props) {
  return <FormattedMessage {...props} defaultMessage={<Loader />} />
}

export default FormattedMessageWithLoader
