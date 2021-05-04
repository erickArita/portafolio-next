import { useEffect } from "react"
interface UseListener {
  event: string;
  handler: (e: any) => void;
}
export const useWindowListener = ({  event, handler }: UseListener) => {

  useEffect(() => {
    window.addEventListener(event, handler)
    return () => window.removeEventListener(event, handler)
  }, [])

}


