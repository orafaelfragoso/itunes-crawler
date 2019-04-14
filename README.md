# iTunes Crawler
> It uses the iTunes API and the iTunes Page to retrive information about an artist

## Running

```
docker build . -t YOUR-PREFIX/itunes-crawler
docker run -d -p 3001:3001 -e PORT=3001 YOUR-PREFIX/itunes-crawler
```

or

```
yarn && yarn start
```

## Example

```
http://localhost:3001/search/michael jackson
```

will output:

```
{
  term: "michael+jackson",
  artist: {
    wrapperType: "artist",
    artistType: "Artist",
    artistName: "Michael Jackson",
    artistLinkUrl: "https://itunes.apple.com/us/artist/michael-jackson/32940?uo=4",
    artistId: 32940,
    amgArtistId: 4576,
    primaryGenreName: "Pop",
    primaryGenreId: 14
  },
  description: "...",
  more: {
    hometown: "Gary, IN",
    genre: "Pop",
    born: "Aug 29, 1958"
  },
  images: {
    large: "https://is1-ssl.mzstatic.com/image/thumb/Music/v4/26/81/d7/2681d764-4ae4-3b1b-4ab4-869d65e99a4d/source/1200x630-999.jpg",
    small: "https://is1-ssl.mzstatic.com/image/thumb/Music/v4/26/81/d7/2681d764-4ae4-3b1b-4ab4-869d65e99a4d/source/500x265-999.jpg"
  },
  similar: [
    {
      url: "https://itunes.apple.com/us/artist/chic/555106",
      term: "chic",
      name: "Chic",
      genre: "R&B/Soul",
      image: "https://is3-ssl.mzstatic.com/image/thumb/Music6/v4/49/15/b2/4915b237-1149-f9cd-f6f0-5d4979ac2efa/source/320x320sr.jpg"
    }
  ],
  albums: [
    {
      wrapperType: "collection",
      collectionType: "Album",
      artistId: 32940,
      collectionId: 159292399,
      amgArtistId: 4576,
      artistName: "Michael Jackson",
      collectionName: "The Essential Michael Jackson",
      collectionCensoredName: "The Essential Michael Jackson",
      artistViewUrl: "https://itunes.apple.com/us/artist/michael-jackson/32940?uo=4",
      collectionViewUrl: "https://itunes.apple.com/us/album/the-essential-michael-jackson/159292399?uo=4",
      artworkUrl60: "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/60x60bb.jpg",
      artworkUrl100: "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/100x100bb.jpg",
      collectionPrice: 16.99,
      collectionExplicitness: "notExplicit",
      trackCount: 38,
      copyright: "℗ 1972 Motown Records, a Division of UMG Recordings, Inc., 1976, 1978, 1980 Sony Music Entertainment, 1979, 1982, 1987, 1991, 1995, 2001, 2005 MJJ Productions Inc.",
      country: "USA",
      currency: "USD",
      releaseDate: "2005-07-05T07:00:00Z",
      primaryGenreName: "Pop",
      songs: [
        {
          wrapperType: "track",
          kind: "song",
          artistId: 104063,
          collectionId: 159292399,
          trackId: 159292550,
          artistName: "Jackson 5",
          collectionName: "The Essential Michael Jackson",
          trackName: "I Want You Back",
          collectionCensoredName: "The Essential Michael Jackson",
          trackCensoredName: "I Want You Back",
          collectionArtistId: 32940,
          collectionArtistName: "Michael Jackson",
          collectionArtistViewUrl: "https://itunes.apple.com/us/artist/michael-jackson/32940?uo=4",
          artistViewUrl: "https://itunes.apple.com/us/artist/jackson-5/104063?uo=4",
          collectionViewUrl: "https://itunes.apple.com/us/album/i-want-you-back/159292399?i=159292550&uo=4",
          trackViewUrl: "https://itunes.apple.com/us/album/i-want-you-back/159292399?i=159292550&uo=4",
          previewUrl: "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview111/v4/45/bd/fc/45bdfc71-01f5-a730-83af-4650611e3ff0/mzaf_8726531587591019438.plus.aac.p.m4a",
          artworkUrl30: "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/30x30bb.jpg",
          artworkUrl60: "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/60x60bb.jpg",
          artworkUrl100: "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/100x100bb.jpg",
          collectionPrice: 16.99,
          trackPrice: -1,
          releaseDate: "1969-10-07T07:00:00Z",
          collectionExplicitness: "notExplicit",
          trackExplicitness: "notExplicit",
          discCount: 2,
          discNumber: 1,
          trackCount: 21,
          trackNumber: 1,
          trackTimeMillis: 179414,
          country: "USA",
          currency: "USD",
          primaryGenreName: "Pop",
          isStreamable: false
        }
      ]
  ]
}
```
