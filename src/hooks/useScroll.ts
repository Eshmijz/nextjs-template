import { useEffect, useState, useRef } from 'react'

export const useScroll = () => {
  const [isVisible, setIsVisible] = useState(true)
  const prevY = useRef(0)

  const toggleVisibility = () => {
    window.scrollY < prevY.current
      ? setIsVisible(true)
      : setIsVisible(false)
    prevY.current = window.scrollY
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return isVisible
}

