export interface ICategory {
  uuid: string
  name: string
  slug: string
  url?: string
  description?: string
  sub: {
    uuid: string
    name: string
    slug: string
    url?: string
    description?: string
  }[]
}
