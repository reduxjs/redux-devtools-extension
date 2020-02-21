import { compose } from 'redux'

import { DevToolsWindow } from './types'
export { EnhancerOptions, DevToolsWindow } from './types'

type ComposeWithDevTools = DevToolsWindow['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']
type DevToolsEnhancer = DevToolsWindow['__REDUX_DEVTOOLS_EXTENSION__']

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
  typeof window !== 'undefined' && (window as any).__REDUX_DEVTOOLS_EXTENSION__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION__
    : function() {
        return function(noop) {
          return noop
        }
      }
