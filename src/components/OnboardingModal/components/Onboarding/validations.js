import * as yup from 'yup'

const o = {
  mixed: ['default', 'required', 'oneOf', 'notOneOf', 'notType'],
  string: [
    'length',
    'min',
    'max',
    'matches',
    'email',
    'url',
    'trim',
    'lowercase',
    'uppercase'
  ],
  number: [
    'min',
    'max',
    'lessThan',
    'moreThan',
    'notEqual',
    'positive',
    'negative',
    'integer'
  ],
  date: ['min', 'max'],
  object: ['noUnknown'],
  array: ['min', 'max']
}

const formErrorKeys = {}

for (const key in o) {
  const val = o[key]

  val.forEach((v) => {
    if (!formErrorKeys[key]) formErrorKeys[key] = {}
    formErrorKeys[key][v] = `form.error.${key}.${v}`
  })
}

yup.setLocale(formErrorKeys)

export default yup
