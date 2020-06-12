import React from 'react'
import PropTypes from 'prop-types'
import { connect, getIn } from 'formik'
import { Control } from './styled'
import Input from './Input'
import FormControlWrapper from './FormControlWrapper'

const FormInput = ({
  name,
  length,
  showCounter,
  showErrors,
  formik,
  onChange,
  before,
  after,
  ...rest
}) => {
  const handleChange = (e) => {
    if (onChange) onChange(e)

    const { value } = e.target

    if (value.length > length) {
      e.preventDefault()
      return
    }

    return formik.handleChange(e)
  }

  const value = getIn(formik.values, name) || ''
  const touched = getIn(formik.touched, name)
  const error = getIn(formik.errors, name)

  return (
    <FormControlWrapper
      field={name}
      showErrors={showErrors}
      showCounter={showCounter}
      charCount={value ? value.length : 0}
      charLimit={length}
      splitted={!!before || !!after}
    >
      {before}
      <Control>
        <Input
          name={name}
          value={value}
          error={!!(touched && error)}
          onChange={handleChange}
          onBlur={formik.handleBlur}
          disabled={formik.isSubmitting}
          {...rest}
        />
      </Control>
      {after}
    </FormControlWrapper>
  )
}

FormInput.defaultProps = {
  variant: 'outlined',
  fullWidth: true,
  length: 80,
  showErrors: true,
  showCounter: false
}

FormInput.propTypes = {
  before: PropTypes.node,
  after: PropTypes.node,
  formik: PropTypes.object,
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  length: PropTypes.number,
  showErrors: PropTypes.bool,
  showCounter: PropTypes.bool,
  onChange: PropTypes.func
}

export default connect(FormInput)
