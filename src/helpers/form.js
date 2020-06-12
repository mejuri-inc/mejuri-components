export const getFormLabel = (name, intl) => {
  const key = name && name.split('.').pop()

  return key && intl.formatMessage({ id: `form.field.${key}` })
}
