import { type SchemaTypeDefinition } from 'sanity'

import { pizzaType } from './pizza'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [pizzaType],
}
