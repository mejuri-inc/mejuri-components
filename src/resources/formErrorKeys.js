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

let mapping = {}

for (let key in o) {
  const val = o[key]

  val.forEach(v => {
    if (!mapping[key]) mapping[key] = {}
    mapping[key][v] = `form.error.${key}.${v}`
  })
}

export default mapping
