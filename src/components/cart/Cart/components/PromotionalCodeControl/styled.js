import styled from 'styled-components'
import Button from '../../../../../components/common/Button'
import { fontWeight } from '../../../../../styles/settings'
import colors from '../../../../../styles/colors'

export const ApplyButton = styled(Button)`
  flex-grow: 1;
  && { /* stylelint-disable-line rule-empty-line-before */
    background: ${colors.blackInactive};
    font-size: 14px;
    padding: 12px;
    width: auto;
  }
`
ApplyButton.displayName = 'PromotionalCodeControlApplyButton'

export const Input = styled.input`
  border: 1px solid;
  flex-grow: 3;
  font-size: 14px;
  font-weight: ${fontWeight.light};
  line-height: normal;
  padding: 12px 16px;

  &:focus {
    border-color: ${colors.lightGray1};
    outline: none;
  }
`
Input.displayName = 'PromotionalCodeControlInput'

export const Wrapper = styled.div`
  display: flex;
  padding-bottom: 20px;
  &:hover ${Input} { /* stylelint-disable-line rule-empty-line-before */
    border-color: ${colors.lightGray1};
    outline: none;
  }
`
Wrapper.displayName = 'PromotionalCodeControlWrapper'
