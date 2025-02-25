import { type SchemaTypeDefinition } from 'sanity'
import products from './product'
import review from './review'
import order from './order'
import signUpUser from './signup'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products, review, order, signUpUser],
}
