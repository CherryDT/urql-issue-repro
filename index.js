import { createClient, dedupExchange, cacheExchange, fetchExchange } from '@urql/core'
import { readFile } from 'fs/promises'
import { getIntrospectedSchema } from '@urql/introspection'

async function main () {
  const sdl = await readFile(new URL('./schema.graphql', import.meta.url), 'utf8')
  const schema = await getIntrospectedSchema(sdl)

  const client = createClient({
    url: 'http://localhost:8080/graphql',
    exchanges: [
      dedupExchange,
      cacheExchange({ schema }),
      fetchExchange
    ]
  })

  // Queries go here
}

main().catch(e => { console.error(e); process.exit(1) })

