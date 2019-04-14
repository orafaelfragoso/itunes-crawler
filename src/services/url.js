export default function url(term) {
  return (decodeURIComponent(term)).replace(' ', '+')
}
