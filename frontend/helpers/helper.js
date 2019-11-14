export const titleize = (string) => {
  let words = string.split(' ').map(el => el[0].toUpperCase() + el.slice(1))
  return words.join(' ');
}