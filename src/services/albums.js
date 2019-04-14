import fetch from 'node-fetch'

export default async function albums(term) {
  const url = `https://itunes.apple.com/search?term=${term}&entity=album&limit=6`
  const results = await fetch(url).then(res => res.json()).then(res => res.results)

  const albumIds = results.map(album => album.collectionId).join(',')
  const musicUrl = `https://itunes.apple.com/lookup?id=${albumIds}&entity=song&media=music`
  const songs = await fetch(musicUrl).then(res => res.json()).then(res => res.results)

  return results.map(album => {
    album.songs = songs.filter(song => {
      if (song.collectionId === album.collectionId && song.wrapperType !== 'collection') {
        return true
      }

      return false
    })

    return album
  })
}
