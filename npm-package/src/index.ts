import { StoreEnhancer, compose } from 'redux'

import { EnhancerOptions } from './types'
export { EnhancerOptions } from './types'

/**
 * @public
 */
export const composeWithDevTools: {
  (options: EnhancerOptions): typeof compose
  <StoreExt>(...funcs: Array<StoreEnhancer<StoreExt>>): StoreEnhancer<StoreExt>
} =
  typeof window !== 'undefined' &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : function() {
        if (arguments.length === 0) return undefined
        if (typeof arguments[0] === 'object') return compose
        return compose.apply(null, (arguments as any) as Function[])
      }

/**
 * @public
 */
export const devToolsEnhancer: {
  (options: EnhancerOptions): StoreEnhancer<any>
} =
  typeof window !== 'undefined' && (window as any).__REDUX_DEVTOOLS_EXTENSION__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION__
    : function() {
        return function(noop) {
          return noop
        }
      }
