import styled from 'styled-components'
import colors from 'styles/colors'

export const Wrapper = styled.div`
  background: ${colors.white};
  border-top: 1px solid ${colors.lightGray1};
  margin-top: 100px;
  padding: 0;
  overflow: hidden;
`
Wrapper.displayName = 'FooterWrapper'

export const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 80px 8.33% 30px;
`
Body.displayName = 'FooterBody'
