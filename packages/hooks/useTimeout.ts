import React, { useEffect } from 'react'

import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect'

const useTimeout = (callback: () => void, delay: number | null): void => {
  const savedCallback = React.useRef<() => void>(callback)

  // Remember the latest callback if it changes
  useIsomorphicLayoutEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the timeout
  useEffect(() => {
    // Don't schedule if no delay is specified.
    // Note: 0 is a valid value for delay.
    if (!delay && delay !== 0) return undefined
    const id = setTimeout(() => savedCallback.current(), delay)
    return () => clearTimeout(id)
  }, [delay])
}
export default useTimeout
