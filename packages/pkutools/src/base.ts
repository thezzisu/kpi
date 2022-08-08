/* eslint-disable @typescript-eslint/ban-types */

const K_CHILDREN = 'pku:children'
const K_METHODS = 'pku:methods'
const K_DESCRIPTION = 'pku:description'

export function Collection(description = 'No description'): ClassDecorator {
  return function (target: Function) {
    Reflect.defineMetadata(K_DESCRIPTION, description, target)
  }
}

export function getCollectionDescription(target: Function): string {
  return Reflect.getMetadata(K_DESCRIPTION, target) || 'No description'
}

export function Child(): PropertyDecorator {
  return function (target: Object, propertyKey: string | symbol) {
    if (typeof propertyKey !== 'string')
      throw new Error('Child key must be a string')
    const children = Reflect.getMetadata(K_CHILDREN, target) ?? []
    Reflect.defineMetadata(K_CHILDREN, [...children, propertyKey], target)
  }
}

export function getChildren(target: Object): string[] {
  return Reflect.getMetadata(K_CHILDREN, target) ?? []
}

export function Method(description = 'No description'): MethodDecorator {
  return function (
    target: Object,
    propertyKey: string | symbol,
    _descriptor: PropertyDescriptor
  ) {
    if (typeof propertyKey !== 'string')
      throw new Error('Method key must be a string')
    const methods = Reflect.getMetadata(K_METHODS, target) ?? []
    Reflect.defineMetadata(K_METHODS, [...methods, propertyKey], target)
    Reflect.defineMetadata(K_DESCRIPTION, description, target, propertyKey)
  }
}

export function getMethods(target: Object): string[] {
  return Reflect.getMetadata(K_METHODS, target) ?? []
}

export function getMethodDescription(target: Object, key: string): string {
  return Reflect.getMetadata(K_DESCRIPTION, target, key) ?? ''
}
