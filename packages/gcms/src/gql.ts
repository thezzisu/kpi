export class GQLClient {
  constructor(
    private token: string,
    private endpoint = 'https://api.github.com/graphql'
  ) {}

  async execute(
    query: string,
    variables?: Record<string, unknown>
  ): Promise<unknown> {
    const resp = await fetch(this.endpoint, {
      method: 'POST',
      headers: {
        Authorization: `bearer ${this.token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query, variables })
    })
    const data = await resp.json()
    return data
  }
}
