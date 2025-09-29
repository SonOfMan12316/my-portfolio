export const formatedDateMonthYear = (currentDate: string) => {
  const [day, month, year] = currentDate.split('/').map(Number)
  const date = new Date(year, month - 1, day)

  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    year: 'numeric',
  }).format(date)
}

export const formatedDate = (currentDate: string) => {
  const [day, month, year] = currentDate.split('/').map(Number)
  const date = new Date(year, month - 1, day)

  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  }).format(date)
}

export const getCompactDuration = (
  startStr: string,
  endStr: string
): string => {
  const [, startMonth, startYear] = startStr.split('/').map(Number)
  const [, endMonth, endYear] = endStr.split('/').map(Number)

  const totalStartMonths = startYear * 12 + (startMonth - 1)
  const totalEndMonths = endYear * 12 + (endMonth - 1)
  const diff = totalEndMonths - totalStartMonths

  const years = Math.floor(diff / 12)
  const months = diff % 12

  const yearStr = years > 0 ? `${years} year${years > 1 ? 's' : ''}` : ''
  const monthStr = months > 0 ? `${months} month${months > 1 ? 's' : ''}` : ''

  return [yearStr, monthStr].filter(Boolean).join(', ')
}
