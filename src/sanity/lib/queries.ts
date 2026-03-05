import { groq } from 'next-sanity'

export const pizzasQuery = groq`*[_type == "pizza"] | order(order asc) {
  _id,
  id,
  name,
  ingredients,
  price,
  allergens,
  "image": image.asset->url
}`
