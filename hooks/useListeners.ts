import { useEffect } from "react"

export const useWindowListener = (event: keyof WindowEventMap, handler: (e: any) => void) => {
  useEffect(() => {
    window.addEventListener(event, handler)
    return () => window.removeEventListener(event, handler)
  }, [])
}


