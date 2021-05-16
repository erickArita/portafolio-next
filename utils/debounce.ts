
let timeOutId: number | undefined | any = undefined
/**Debounce to not recalculate too fast animation on shape component
 * Does not allow the consecutive execution in x period of time of a function
 * @param cb funtion to Debounce
 * @param time time when the debounce function allows a new instance
 */
const debounce = (cb: () => void, time: number = 100) => {
  /**If exist timeOutId of other instance clear this timeOut  */
  if (timeOutId) { clearTimeout(timeOutId) }

  timeOutId = setTimeout(() => {
    cb()
  }, time)

}

export default debounce