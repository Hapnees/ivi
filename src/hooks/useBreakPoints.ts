<<<<<<< HEAD
import { Dispatch, SetStateAction, useEffect } from 'react'
=======
import { Dispatch, SetStateAction, useEffect, useRef } from 'react'
>>>>>>> 2968c9a251e14f27af4b292c4b4993b67cbe3e6f

export const useBreakPoints = (
  setter: Dispatch<SetStateAction<number>>,
  defaultValue: number,
  breakpoints?: number[]
) => {
  if (!breakpoints?.length) return

  const callback = () => {
    const _breakpoints = [...breakpoints]
    const nearestBreakpoints = _breakpoints.filter(
      bp => bp >= window.innerWidth
    ).length

    if (!nearestBreakpoints) {
      setter(prev => {
        if (prev < defaultValue) {
          return defaultValue
        }
        return prev
      })

      return
    }

    setter(prev => {
      const applitedBreakpoints = defaultValue - prev
      const minus = nearestBreakpoints - applitedBreakpoints
      return prev - minus
    })
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', callback)
    }

    callback()

    return () => window.removeEventListener('resize', callback)
  }, [setter])
}
