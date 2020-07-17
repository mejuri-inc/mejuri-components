import { toNumber } from './numbers'

export const currencies = {
  USD: '$',
  CAD: 'C$',
  AUD: 'AU$',
  GBP: '£'
}

export const toCurrency = (amount, currency = 'USD', whenZero) => {
  const prefix = amount < 0 ? '-' : ''
  const symbol = currencies[currency] || ''
  const formattedAmount = toNumber(Math.abs(+amount))

  if (formattedAmount === 0 && whenZero !== undefined) return whenZero

  return `${prefix}${symbol}${formattedAmount}`
}

export const toCurrencyWithCode = (amount, currency = 'USD', whenZero) =>
  `${toCurrency(amount, currency, whenZero)} ${currency}`
