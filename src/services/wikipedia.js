import fetch from 'node-fetch'

export default async function wikipedia(term) {
  return fetch('https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=' + term)
          .then(res => res.json())
          .then(res => {
            const keys = Object.keys(res.query.pages)
            const text = res.query.pages[keys[0]].extract
            const limitedText = text.substring(0, 500)

            return limitedText.substring(0, limitedText.lastIndexOf('.'))
          })
}

