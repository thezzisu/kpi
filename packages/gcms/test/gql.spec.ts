import { GQLClient } from '../src/gql.js'
import { expect } from 'chai'

const GH_TOKEN = process.env.GH_TOKEN
if (typeof GH_TOKEN !== 'string' || !GH_TOKEN)
  throw new Error('GH_TOKEN is not set')

describe('GraphQL Client', () => {
  const client = new GQLClient(GH_TOKEN)
  it('should perform query', async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result = <any>await client.execute('query { viewer { login }}')
    result.data.viewer.login = '*'
    expect(result).deep.equal({ data: { viewer: { login: '*' } } })
  })
})
