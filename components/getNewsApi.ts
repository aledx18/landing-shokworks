export async function fetchDetail() {
  const apiKey = '9d85d4a2b0e24186adcf64a29a420da4'

  const res = await fetch(
    `https://newsapi.org/v2/everything?q=microsoft&apiKey=${apiKey}`
  )
  const data = await res.json()
  return data
}
