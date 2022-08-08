/* eslint-disable @typescript-eslint/ban-types */
export function parseFunctionArgs(func: Function): string[] {
  let code = func.toString()
  code = code.replace(/\/\*[\s\S]*?\*\//gm, '')
  code =
    code.match(
      /(?:[a-zA-Z_$][a-zA-Z\d_$]*)?\s*\(\s*((?:(?:\s*[a-zA-Z_$][a-zA-Z\d_$]*)(?:,\s*[a-zA-Z_$][a-zA-Z\d_$]*\s*)*)?)\)/
    )?.[1] ?? ''
  code = code.trim()
  if (!code) return []
  return code.split(',').map((arg) => arg.trim())
}
