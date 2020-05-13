import React from 'react'
import PropTypes from 'prop-types'
import { injectIntl, intlShape } from 'react-intl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import MuiCheckbox from '@material-ui/core/Checkbox'

const Checkbox = ({ intl, label, name, ...rest }) => (
  <FormControlLabel
    control={<MuiCheckbox {...rest} />}
    label={label ? intl.formatMessage({ id: label }) : name}
  />
)

Checkbox.propTypes = {
  intl: intlShape.isRequired,
  label: PropTypes.string,
  name: PropTypes.string
}

export default injectIntl(Checkbox)
