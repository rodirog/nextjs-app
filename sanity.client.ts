// sanity/sanity.client.ts

import { createClient, type ClientConfig } from '@sanity/client'

const config: ClientConfig = {
  projectId: 'gbxqez8b',
  dataset: 'production',
  apiVersion: '2024-01-06',
  useCdn: false,
}

const client = createClient(config)

export default client
