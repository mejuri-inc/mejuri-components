import React from 'react'
import PropTypes from 'prop-types'
import {
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  Icon,
  Text
} from './styled'

const Checkbox = ({ onChange, checked, labelText, ...props }) => {
  const id = 'newsletter-subscribe'

  return (
    <CheckboxContainer htmlFor={id}>
      <HiddenCheckbox
        checked={checked}
        id={id}
        onChange={onChange}
        {...props}
      />
      <StyledCheckbox checked={checked}>
        <Icon viewBox='0 0 20 20'>
          <polyline points='18 8 7 20 2 14' />
        </Icon>
      </StyledCheckbox>
      <Text>{labelText}</Text>
    </CheckboxContainer>
  )
}

Checkbox.propTypes = {
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  labelText: PropTypes.element
}

export default Checkbox
