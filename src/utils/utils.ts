export function getFormattedDate(date: string) {
  const dateObject = new Date(date)

  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }

  return dateObject.toLocaleDateString('es-PE', options)
}
