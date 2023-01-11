// format Date Objects to RFC3339 timestamp string.
export function formatDateToRFC3339(date: Date): string {
    return (
      date.getFullYear() +
      "-" +
      ("0" + (date.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + date.getDate()).slice(-2) +
      "T" +
      date.getHours() +
      ":" +
      ("0" + date.getMinutes()).slice(-2) +
      ":" +
      ("0" + date.getSeconds()).slice(-2) +
      "Z"
    );
}