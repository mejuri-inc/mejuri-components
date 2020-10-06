import styled from 'styled-components'

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  // Hide checkbox visually but remain accessible to screen readers.
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

export const Icon = styled.svg`
  fill: none;
  stroke: ${(p) => p.theme.colors.white};
  stroke-width: 3px;
  position: absolute;
  width: 100%;
  height: 100%;
  top: -3px;
  left: 0px;
`

export const StyledCheckbox = styled.div`
  background: ${(p) =>
    p.checked ? p.theme.colors.black : p.theme.colors.white};
  border: 1px solid
    ${(p) => {
      return p.theme.colors.black
    }};
  height: 16px;
  position: relative;
  transition: all 150ms;
  width: 16px;

  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }
`

export const CheckboxContainer = styled.label`
  display: flex;
`

export const Text = styled.p`
  cursor: pointer;
  font-size: 11px;
  line-height: 14px;
  text-align: left;
  padding-left: 10px;
  width: 100%;
`
