/**
 * This function fetches data from a JSON API endpoint and returns it as a Promise.
 * @returns The function `fetchTestimon` is returning the data fetched from the URL
 * `https://jsonplaceholder.typicode.com/posts` in JSON format.
 */
export async function fetchTestimon() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
  return data
}
