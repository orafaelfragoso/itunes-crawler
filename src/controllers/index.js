import { url, itunesApi, itunesPage, albums } from '../services'

export async function search (req, res, next) {
  try {
    const term = url(req.params.term)
    const artist = await itunesApi(term)
    const itunes = await itunesPage(artist.artistLinkUrl)
    const music = await albums(term)

    res.status(200).json({
      term,
      artist,
      ...itunes,
      albums: music
    })
  } catch (err) {
    next(err)
  }
}
