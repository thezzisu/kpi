import 'reflect-metadata'
import { Child } from './base.js'
import { PKUIts } from './its.js'
import { PKUPortal } from './portal/index.js'

export class PKU {
  @Child() its
  @Child() portal

  constructor() {
    this.its = new PKUIts()
    this.portal = new PKUPortal()
  }
}

export * from './base.js'
export * from './its.js'
