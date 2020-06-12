import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect, getIn } from 'formik'
import Dropdown from './Dropdown'
import FormControlWrapper from './FormControlWrapper'

export { OptionsPropTypes } from './Dropdown'

class FormDropdown extends PureComponent {
  static propTypes = {
    formik: PropTypes.object,
    name: PropTypes.string,
    updates: PropTypes.string,
    clears: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string)
    ]),
    showErrors: PropTypes.bool,
    onChange: PropTypes.func
  }

  static defaultProps = {
    showErrors: true
  }

  get value () {
    const { formik, name } = this.props

    return getIn(formik.values, name) || ''
  }

  get touched () {
    const { formik, name } = this.props

    return !!getIn(formik.touched, name)
  }

  get error () {
    const { formik, name } = this.props

    return !!getIn(formik.errors, name)
  }

  handleChange = (e) => {
    const { clears, updates, formik, onChange } = this.props

    if (clears) {
      if (!clears.length) {
        formik.setFieldValue(clears, '')
        formik.setFieldTouched(clears, false, false)
      } else {
        clears.forEach(c => {
          formik.setFieldValue(c, '')
          formik.setFieldTouched(c, false, false)
        })
      }
    }

    if (updates) {
      formik.setFieldValue(updates, this.value)
      formik.setFieldTouched(updates, true, false)
    }

    if (onChange) {
      const result = onChange({
        form: formik,
        value: this.value
      })

      if (result === false) return
    }

    return formik.handleChange(e)
  }

  render () {
    const { name, showErrors, formik, ...rest } = this.props

    return (
      <FormControlWrapper
        field={name}
        showErrors={showErrors}
      >
        <Dropdown
          name={name}
          value={`${this.value}`}
          error={this.touched && this.error}
          onChange={this.handleChange}
          onBlur={formik.handleBlur}
          disabled={formik.isSubmitting}
          {...rest}
        />
      </FormControlWrapper>
    )
  }
}

export default connect(FormDropdown)
