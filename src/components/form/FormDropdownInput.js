import React from 'react'
import PropTypes from 'prop-types'
import FormDropdown, { OptionsPropTypes } from './FormDropdown'
import FormInput from './FormInput'

const FormDropdownInput = ({ options, ...props }) => {
  if (!Array.isArray(options)) return <FormInput {...props} />
  return <FormDropdown options={options} {...props} />
}

FormDropdownInput.propTypes = {
  formik: PropTypes.object,
  name: PropTypes.string,
  options: OptionsPropTypes
}

export default FormDropdownInput
