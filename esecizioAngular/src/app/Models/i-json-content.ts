import { iPost } from "./i-post"

export interface IJsonContent {
  posts: iPost[]
  total: number
  skip: number
  limit: number
}
