import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { intlShape, injectIntl } from 'react-intl'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import uuidv4 from 'uuid/v4'
import { getFormLabel } from 'app/helpers/form'

export const OptionsPropTypes = PropTypes.arrayOf(PropTypes.shape({
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  label: PropTypes.string
}))

export class Dropdown extends PureComponent {
  static propTypes = {
    intl: intlShape.isRequired,
    options: OptionsPropTypes,
    id: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    error: PropTypes.bool,
    fullWidth: PropTypes.bool,
    onChange: PropTypes.func
  }

  static defaultProps = {
    options: [],
    error: false,
    fullWidth: true,
    onChange: () => {}
  }

  constructor (props) {
    super(props)

    this.id = props.id || uuidv4()
    this.InputLabelRef = null
    this.state = { labelWidth: 0 }
  }

  componentDidMount () {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth
    })
  }

  get optionItems () {
    const { options, label } = this.props

    const oo = options.slice()

    oo.unshift({
      value: '',
      label,
      disabled: true
    })

    return oo.map(({ value, label, disabled }) => (
      <option key={value} value={value} disabled={disabled}>{label}</option>
    ))
  }

  render () {
    const { intl, name, value, error, fullWidth, onChange, ...rest } = this.props
    const { labelWidth } = this.state

    return (
      <FormControl variant='outlined' fullWidth={fullWidth} error={error}>
        <InputLabel
          htmlFor={this.id}
          ref={ref => { this.InputLabelRef = ref }}
        >
          {getFormLabel(name, intl)}
        </InputLabel>
        <Select
          native
          name={name}
          value={value}
          onChange={onChange}
          input={<OutlinedInput labelWidth={labelWidth} id={this.id} />}
          {...rest}
        >
          {this.optionItems}
        </Select>
      </FormControl>
    )
  }
}

export default injectIntl(Dropdown)
