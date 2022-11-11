import { useRef, useState } from 'react'

export function useScrollFade() {
  const [scrollClass, setScrollClass] = useState('scroll-fade')
  const ref = useRef(null)

  function onScroll() {
    setScrollClass(
      ref.current.scrollLeft > 0
        ? ref.current.clientWidth + ref.current.scrollLeft ===
          ref.current.scrollWidth
          ? 'scroll-fade scroll-fade-passive'
          : 'scroll-fade scroll-fade-active'
        : 'scroll-fade'
    )
  }

  return {
    ref,
    scrollClass,
    onScroll,
  }
}
