import React from 'react'
import PropTypes from 'prop-types'
import { connect, getIn } from 'formik'
import Checkbox from './Checkbox'
import FormControlWrapper from './FormControlWrapper'

const FormCheckbox = ({ id, name, showErrors, formik, ...rest }) => {
  const value = !!getIn(formik.values, name)

  return (
    <FormControlWrapper
      field={name}
      showErrors={showErrors}
    >
      <Checkbox
        id={id || name}
        name={name}
        checked={!!value}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        disabled={formik.isSubmitting}
        {...rest}
      />
    </FormControlWrapper>
  )
}

FormCheckbox.defaultProps = {
  variant: 'outlined',
  showErrors: true
}

FormCheckbox.propTypes = {
  formik: PropTypes.object,
  id: PropTypes.string,
  name: PropTypes.string,
  showErrors: PropTypes.bool
}

export default connect(FormCheckbox)
