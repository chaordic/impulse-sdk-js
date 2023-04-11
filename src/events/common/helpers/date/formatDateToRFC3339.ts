export function formatDateToRFC3339(date: Date): string {
  const year = date.getFullYear()
  const month =  `0${date.getMonth() + 1}`.slice(-2)
  const days = `0${date.getDate()}`.slice(-2) 
  const hours = date.getHours()
  const minutes = `0${date.getMinutes()}`.slice(-2)
  const seconds = `0${date.getSeconds()}`.slice(-2)

  return `${year}-${month}-${days}T${hours}:${minutes}:${seconds}Z`
}
