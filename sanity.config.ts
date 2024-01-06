import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'jojos-sanity',

  projectId: 'gbxqez8b',
  dataset: 'production',
  basePath: '/studio',

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
})
