import fetch from 'node-fetch'

export default async function itunesApi(term) {
  const url = `https://itunes.apple.com/search?term=${term}&entity=musicArtist`
  return fetch(url)
          .then(res => res.json())
          .then(res => res.results[0])
}
