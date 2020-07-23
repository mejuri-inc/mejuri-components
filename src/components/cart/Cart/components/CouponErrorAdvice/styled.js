import styled from 'styled-components/macro'
import colors from 'styles/colors'

export const Message = styled.div`
  background: ${colors.black};
  bottom: 15px;
  color: ${colors.white};
  font-size: 15px;
  font-weight: 300px;
  opacity: ${(p) => (p.visible ? 1 : 0)};
  padding: 1rem;
  position: absolute;
  transition: opacity 0.5s ease;
`
Message.displayName = 'CouponErrorAdviceMessage'

export const Wrapper = styled.div`
  position: relative;
`
Wrapper.displayName = 'CouponErrorAdviceWrapper'
