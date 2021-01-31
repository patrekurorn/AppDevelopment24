export function minToTime(mins) {
  const hours = Math.floor(mins / 60);
  const minutes = mins - hours * 60;
  return `${hours}h ${minutes}m`;
}

export function cleanString(text) {
  if (text == null) return '';
  return text.toString().replace(/(?:\r\n|\r|\n|<[^>]*>|\s\s+)/g, ' ');
}

export function formatDate(date) {
  const today = date.toJSON().slice(0, 10);
  const fields = today.split('-');
  const day = fields[2];
  const month = fields[1];
  const year = fields[0];
  return `${day}.${month}.${year}`;
}
