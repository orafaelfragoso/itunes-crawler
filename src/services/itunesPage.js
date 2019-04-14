import fetch from 'node-fetch'
import cheerio from 'cheerio'

export default async function itunesPage(url) {
  const page = await fetch(url).then(res => res.text())

  const $ = cheerio.load(page)
  const image = $('meta[property="og:image"]').attr('content')
  const similar = $('.section-group--artist > section > .l-row--peek a')
  const info = $('.we-about-artist-inline__details').eq(0)
  const description = $('.we-about-artist-inline__desc > div > p').text()
  const hometown = info.children().eq(0).find('.we-about-artist-inline__details-info').text().trim()
  const genre = info.children().eq(1).find('.we-about-artist-inline__details-info').text().trim()
  const born = info.children().eq(2).find('.we-about-artist-inline__details-info').text().trim()

  const items = []

  similar.each(function(i, elem) {
    let artist = {}

    artist.url = $(this).attr('href')
    artist.term = $(this).attr('href').split('/')[5]
    artist.name = $(this).find('.we-lockup__title').text().trim()
    artist.genre = $(this).find('.we-lockup__subtitle').text().trim()
    artist.image = $(this).find('.we-artwork__image').data('src')

    items.push(artist)
  })

  return {
    description,
    more: {
      hometown,
      genre,
      born
    },
    images: {
      large: image.substring(0, image.lastIndexOf("/") + 1) + "1200x630-999.jpg",
      small: image.substring(0, image.lastIndexOf("/") + 1) + "500x265-999.jpg"
    },
    similar: items
  }
}
