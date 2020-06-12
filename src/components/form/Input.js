import React from 'react'
import PropTypes from 'prop-types'
import { intlShape, injectIntl } from 'react-intl'
import TextField from '@material-ui/core/TextField'
import { getFormLabel } from 'helpers/form'

const Input = ({ intl, label, name, readOnly, placeholder, ...rest }) => {
  const inputProps = {
    readOnly
  }

  return (
    <TextField
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
