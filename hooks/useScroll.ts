import scrollTo from 'animated-scroll-to'

/**scroll to element
 * @param target element to scroll
 */
const useScroll = (target: string) => {
  //@ts-ignore
  const element = document.querySelector(target)
  element && scrollTo(element, { cancelOnUserAction: false})
}
export default useScroll