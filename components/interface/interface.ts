interface Source {
  id: string
  name: string
}
interface Article {
  source: Source
  author: string
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: string
  content: string
}
export interface News {
  status: string
  totalResults: number
  articles: Article[]
}
export interface Coments {
  id: number
  title: string
  body: string
  userId: number
}
