import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { intlShape, injectIntl } from 'react-intl'
import { TextField } from '@material-ui/core'

const StyledTextField = styled(TextField)`
  border: 2px solid tomato;
`

export const getFormLabel = (name, intl) => {
  const key = name && name.split('.').pop()

  return key && intl.formatMessage({ id: `form.field.${key}` })
}

const Input = ({ intl, label, name, readOnly, placeholder, ...rest }) => {
  const inputProps = {
    readOnly
  }

  return (
    <StyledTextField
      name={name}
      label={
        label ? intl.formatMessage({ id: label }) : getFormLabel(name, intl)
      }
      placeholder={placeholder && intl.formatMessage({ id: placeholder })}
      InputProps={inputProps}
      {...rest}
    />
  )
}

Input.defaultProps = {
  variant: 'outlined',
  fullWidth: true
}

Input.propTypes = {
  intl: intlShape.isRequired,
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  variant: PropTypes.string,
  fullWidth: PropTypes.bool,
  readOnly: PropTypes.bool
}

export default injectIntl(Input)
