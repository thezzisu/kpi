export async function fetchJSON(
  input: RequestInfo | URL,
  init?: RequestInit | undefined
) {
  const resp = await fetch(input, init)
  const json = await resp.json()
  return json
}
