import 'reflect-metadata'
import { Child } from './base.js'
import { PKUIts } from './its.js'

export class PKU {
  @Child() its

  constructor() {
    this.its = new PKUIts()
  }
}

export * from './base.js'
export * from './its.js'
