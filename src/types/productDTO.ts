

export type productDTO = {
  company: {name: string}
  name: string,
  cheapestAtCompany: {
    name: string
  }
  cheapestAtPrice: number,
  created_on: Date,
  last_modified: Date
}