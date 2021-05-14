import { useEffect, useRef, useState } from "react"

interface UseObserver {
  target: string,
  options?: IntersectionObserverInit
}
/**hook that observe DOM elements and notify where observe element is inview
 * @param options IntersectionObserver options
 * @param target Element to observe
 * @return boolean true where wlwmwnt is in view
 */
export const useObserver = ({ options = { threshold: .6 }, target }: UseObserver): boolean => {
  const observer = useRef<IntersectionObserver>()
  const [inView, setInView] = useState(false);
  useEffect(() => {
    observer.current = new IntersectionObserver(([e]) => setInView(e.isIntersecting), options)
    observer.current?.observe(document.querySelector(target) || new Element)
    return () => {
      observer.current?.unobserve(document.querySelector(target) || new Element)
    }
  }, [])
  return inView 
}

