const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'Spetember',
  'October',
  'November',
  'December'
]

export const getYear = (date: string): string => {
  return date.substring(0,4)
}

export const getMonth = (date: string): string => {
  let num = parseInt(date.substring(5,7))-1
  return months[num]
}

export const getDay = (date: string): string => {
  return date.substring(8,10)
}