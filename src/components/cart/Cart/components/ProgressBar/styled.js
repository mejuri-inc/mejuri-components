import styled from 'styled-components/macro'
import colors from 'styles/colors'

export const Wrapper = styled.div`
  background: ${colors.lightGray2};
  display: block;
  height: 5px;
  position: relative;
  width: 100%;
`
Wrapper.displayName = 'ProgressBarWrapper'

export const InnerBar = styled.div`
  background: ${colors.beige};
  height: 5px;
  position: absolute;
  right: ${(p) => `${100 - p.percentage}%`};
  top: 0;
  transition: right 0.25s ease;
  width: 100%;
`
InnerBar.displayName = 'ProgressBarInnerBar'
