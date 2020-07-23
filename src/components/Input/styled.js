import styled from 'styled-components/macro'
import { fontWeight } from 'styles/settings'
import { fadeIn } from 'styles/effects'
import colors from 'styles/colors'

export const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-weight: ${fontWeight.light};
`
Wrapper.displayName = 'EngravingWrapper'

export const Container = styled.div`
  display: flex;
  align-items: flex-end;
`
Wrapper.displayName = 'EngravingWrapper'

export const Selector = styled.input`
  outline: none;
  display: block;
  width: 100%;
  margin: 24px 0 0;
  padding: 10px 30px 10px 10px;
  text-align: left;
  border-radius: initial;
  height: 48px;
  line-height: 48px;
  border-width: 1px;
`
Selector.displayName = 'EngravingSelector'

export const Arrow = styled.button`
  height: 47px;
  width: 47px;
  padding: 0 16px;
  appearance: none;
  border: none;
  outline: 0;
  background: transparent;
  cursor: pointer;
  margin-left: -45px;

  & > svg {
    transform: rotate(90deg);
    height: 100%;
  }
`
Arrow.displayName = 'FooterNewsletterSubscribeArrow'

export const Error = styled.div`
  ${fadeIn}
  opacity: 0;
  color: ${colors.error};
  padding: 0;
  font-size: 16px;
  font-weight: ${fontWeight.light};
  height: 15px;
  margin-top: 10px;
  width: 100%;
`
Error.displayName = 'EngravingError'

export const Message = styled.div`
  display: ${(props) => (props.showError ? 'block' : 'none')};
`
Message.displayName = 'EngravingErrorMessage'
