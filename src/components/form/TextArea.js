import React from 'react'
import Input from './Input'

const TextArea = (props) => <Input {...props} />

TextArea.defaultProps = {
  multiline: true,
  rows: 3,
  length: 140
}

export default TextArea
