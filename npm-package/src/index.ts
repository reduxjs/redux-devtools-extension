import { compose } from 'redux'

export { EnhancerOptions } from './types'

type ComposeWithDevTools = Window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']
type DevToolsEnhancer = Window['__REDUX_DEVTOOLS_EXTENSION__']

/**
 * @public
 */
export const composeWithDevTools: ComposeWithDevTools =
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
export const devToolsEnhancer: DevToolsEnhancer =
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION__
    : function() {
        return function(noop) {
          return noop
        }
      }
