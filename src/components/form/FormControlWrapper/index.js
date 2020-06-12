import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, Control, Info, Error, Counter } from './styled'

const FormControlWrapper = ({ children, field, showCounter, showErrors, charCount, charLimit, splitted }) => (
  <Wrapper>
    <Control splitted={splitted}>{children}</Control>
    <Info>
      {!!showCounter && (
        <Counter>
          {+charCount} / {+charLimit}
        </Counter>
      )}
      {!!showErrors && <Error field={field} />}
    </Info>
  </Wrapper>
)

FormControlWrapper.defaultProps = {
  variant: 'outlined',
  fullWidth: true,
  showCounter: false,
  showErrors: true
}

FormControlWrapper.propTypes = {
  children: PropTypes.node,
  field: PropTypes.string,
  showCounter: PropTypes.bool,
  splitted: PropTypes.bool,
  showErrors: PropTypes.bool,
  charCount: PropTypes.number,
  charLimit: PropTypes.number
}

export default FormControlWrapper
