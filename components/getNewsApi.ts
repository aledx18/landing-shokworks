/**
 * This function fetches news articles related to Microsoft using the NewsAPI and returns the data.
 * @returns The function `fetchDetail()` is returning the data fetched from the News API in JSON
 * format. The data contains news articles related to Microsoft.
 */
export async function fetchDetail() {
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=microsoft&apiKey=${process.env.NEXT_PUBLIC_KEY}`
  )
  const data = await res.json()
  return data
}
