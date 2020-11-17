import { toNumber } from './numbers'

export const currencies = {
  USD: '$',
  CAD: 'C$',
  AUD: 'AU$',
  GBP: '£'
}

const isInt = (n) => n % 1 === 0

export const toCurrency = (amount, currency = 'USD', whenZero) => {
  const prefix = amount < 0 ? '-' : ''
  const symbol = currencies[currency] || ''
  const formattedAmount = toNumber(Math.abs(+amount))

  if (formattedAmount === 0 && whenZero !== undefined) return whenZero

  const displayAmount =
    formattedAmount === 0 || isInt(formattedAmount)
      ? formattedAmount
      : formattedAmount.toFixed(2)

  return `${prefix}${symbol}${displayAmount}`
}

export const toCurrencyWithCode = (amount, currency = 'USD', whenZero) =>
  `${toCurrency(amount, currency, whenZero)} ${currency}`
