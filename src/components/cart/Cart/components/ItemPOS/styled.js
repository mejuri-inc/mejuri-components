import styled from 'styled-components'
import colors from '../../../../../styles/colors'
import { fontWeight } from '../../../../../styles/settings'

export const Col = styled.div`
  font-size: 14px;
  font-weight: ${fontWeight.light};
  line-height: normal;
`

export const Wrapper = styled.div`
  background: ${colors.lightGray4};
  display: flex;
  justify-content: space-between;
  padding: 9px 30px;
`
