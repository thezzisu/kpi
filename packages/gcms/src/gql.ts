export class GQLClient {
  constructor(
    private token: string,
    private endpoint = "https://api.github.com/graphql"
  ) {}
}
