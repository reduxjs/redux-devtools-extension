import { compose } from 'redux'

export { EnhancerOptions } from './types'

/**
 * @public
 */
export const composeWithDevTools =
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : function() {
        if (arguments.length === 0) return undefined
        if (typeof arguments[0] === 'object') return compose
        return compose.apply(null, (arguments as any) as Function[])
      }

/**
 * @public
 */
export const devToolsEnhancer: typeof window['__REDUX_DEVTOOLS_EXTENSION__'] =
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__
    : function() {
        return function(noop) {
          return noop
        }
      }
