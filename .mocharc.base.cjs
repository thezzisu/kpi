module.exports = {
  extension: ['ts'],
  spec: 'test/**/*.spec.ts',
  require: 'dotenv/config',
  'node-option': [
    'experimental-specifier-resolution=node',
    'loader=ts-node/esm',
    'no-warnings'
  ]
}
