import React from 'react'
import FormInput from './FormInput'

const FormTextArea = (props) => <FormInput {...props} />

FormTextArea.defaultProps = {
  multiline: true,
  rows: 3,
  length: 140,
  showCounter: true
}

export default FormTextArea
