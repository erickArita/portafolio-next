import { useEffect } from "react"

interface UseListener {
  event: string;
  handler: (e: any) => void;
}

/**Hook used for listen window events used in  <Header/> 
 * @param event Event to listen 
 * @param handler callback receives event data
*/
export const useWindowListener = ({ event, handler }: UseListener) => {
  useEffect(() => {
    window.addEventListener(event, handler)
    return () => window.removeEventListener(event, handler)
  }, [])
}


