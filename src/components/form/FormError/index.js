import React from 'react'
import PropTypes from 'prop-types'
import { intlShape, injectIntl } from 'react-intl'
import { connect, getIn } from 'formik'
import Errors from 'components/common/Errors'
import { getFormLabel } from 'helpers/form'
import { Wrapper } from './styled'

const FormError = ({ formik, intl, field, fields, all }) => {
  if (!formik.errors) return null

  let errors = []

  if (all) {
    errors = Object.values(formik.errors)
  } else {
    const list = fields || [field]

    list.forEach((field) => {
      const error = getIn(formik.errors, field)
      if (!error) return

      const touched = getIn(formik.touched, field)
      const label = getFormLabel(field, intl)
      const message = error.startsWith('form.error.')
        ? intl.formatMessage({ id: error }, { field, label })
        : error
      if (error && touched) errors.push(message)
    })
  }

  if (!errors.length) return null

  return (
    <Wrapper>
      <Errors list={errors} />
    </Wrapper>
  )
}

FormError.defaultProps = {
  all: false
}

FormError.propTypes = {
  formik: PropTypes.object,
  intl: intlShape.isRequired,
  field: PropTypes.string,
  fields: PropTypes.arrayOf(PropTypes.string),
  all: PropTypes.bool
}

export default connect(injectIntl(FormError))
