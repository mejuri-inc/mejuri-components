import React, { PureComponent } from 'react'
import { Wrapper, Selector, Error, Message, Arrow, Container } from './styled'
import PropTypes from 'prop-types'
import { FormattedMessage, injectIntl } from 'react-intl'
import ChevronIcon from 'resources/icons/Chevron'

const ERROR_TIMER = 2000

class Input extends PureComponent {
  static propTypes = {
    Submit: PropTypes.func,
    validateValue: PropTypes.func,
    validationErrorId: PropTypes.string,
    emptyValueErrorId: PropTypes.string,
    placeholderId: PropTypes.string
  }

  constructor(props) {
    super(props)
    this.state = {
      value: '',
      showError: false,
      error: ''
    }

    this.timer = null
    this.handleChange = this.handleChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.keyPress = this.keyPress.bind(this)
  }

  handleChange(value) {
    this.setState({ value: value })
  }

  onSubmit() {
    const { value } = this.state
    const {
      validationErrorId,
      emptyValueErrorId,
      submit,
      validateValue
    } = this.props

    if (value.length === 0) {
      const error = <FormattedMessage id={emptyValueErrorId} />
      this.showError(error)
      return
    }

    if (!validateValue(value)) {
      const error = <FormattedMessage id={validationErrorId} />
      this.showError(error)
      return
    }
    submit(value)
  }

  showError(error) {
    clearTimeout(this.timer)
    this.setState({ error: error, showError: true })
    this.timer = setTimeout(
      () => this.setState({ showError: false }),
      ERROR_TIMER
    )
  }

  keyPress(event) {
    if (event.keyCode === 13) {
      this.onSubmit()
    }
  }

  render() {
    const { intl } = this.props
    const { value, showError, error } = this.state
    const { placeholderId } = this.props
    return (
      <Wrapper>
        <Container onKeyDown={this.keyPress}>
          <Selector
            placeholder={intl.formatMessage({ id: placeholderId })}
            value={value}
            onChange={(event) => this.handleChange(event.target.value)}
          />
          <Arrow type='submit' onClick={this.onSubmit}>
            <ChevronIcon />
          </Arrow>
        </Container>
        <Error>
          <Message showError={showError}>{error}</Message>
        </Error>
      </Wrapper>
    )
  }
}

export default injectIntl(Input)
