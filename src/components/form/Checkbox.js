import React from 'react'
import PropTypes from 'prop-types'
import { intlShape, injectIntl } from 'react-intl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import MuiCheckbox from '@material-ui/core/Checkbox'
import { getFormLabel } from 'app/helpers/form'

const Checkbox = ({ intl, label, name, ...rest }) => (
  <FormControlLabel
    control={<MuiCheckbox {...rest} />}
    label={label ? intl.formatMessage({ id: label }) : getFormLabel(name, intl)}
  />
)

Checkbox.propTypes = {
  intl: intlShape.isRequired,
  label: PropTypes.string,
  name: PropTypes.string
}

export default injectIntl(Checkbox)
