import React from 'react'
import PropTypes from 'prop-types'
import { connect, getIn } from 'formik'
import GooglePlaces from './GooglePlaces'
import FormControlWrapper from './FormControlWrapper'
import { mapPlacesResult } from 'app/helpers/places'

const FormGooglePlaces = ({ id, name, showErrors, formik, onSelectLocation, ...rest }) => {
  const handleSelectLocation = (location) => {
    const info = mapPlacesResult(location) || {}
    onSelectLocation(info, formik)
  }

  const value = getIn(formik.values, name) || ''
  const touched = getIn(formik.touched, name)
  const error = getIn(formik.errors, name)

  return (
    <FormControlWrapper
      field={name}
      showErrors={showErrors}
    >
      <GooglePlaces
        id={id || name}
        name={name}
        value={value}
        error={!!(touched && error)}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        disabled={formik.isSubmitting}
        onSelectLocation={handleSelectLocation}
        {...rest}
      />
    </FormControlWrapper>
  )
}

FormGooglePlaces.defaultProps = {
  variant: 'outlined',
  showErrors: true,
  onSelectLocation () {}
}

FormGooglePlaces.propTypes = {
  formik: PropTypes.object,
  id: PropTypes.string,
  name: PropTypes.string,
  mapping: PropTypes.object,
  showErrors: PropTypes.bool,
  onSelectLocation: PropTypes.func
}

export default connect(FormGooglePlaces)
