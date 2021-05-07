import { useEffect, useRef } from "react"

interface UseObserver {
  target: string,
  options: IntersectionObserverInit,
  cb: (e: IntersectionObserverEntry) => void
}

export const useObserver = ({ cb, options, target }: UseObserver) => {
  const observer = useRef<IntersectionObserver>()
  
  useEffect(() => {
    observer.current = new IntersectionObserver(([e]) => cb(e), options)
    observer.current?.observe(document.querySelector(target) || new Element)
    return () => {
      observer.current?.unobserve(document.querySelector(target) || new Element)
    }
  }, [])
}

