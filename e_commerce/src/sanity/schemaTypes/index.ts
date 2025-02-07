import { type SchemaTypeDefinition } from 'sanity'
import products from './product'
import review from './review'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products, review],
}
