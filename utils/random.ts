/**Create random position 
 * @param {number} limit of rand numbers
 * @returns {number} numero
 */
export const randPosition = (limit: number = 60): number => Math.random() * limit;

/**This function create random pos to x and y coord is used in <Circle/> component
 * @returns {Array<{top:string,left:string}>} Array wit two coords
 */
export const createRandomPos = (numberOfRandonPos: number) => {
  return Array(numberOfRandonPos)
    .fill('')
    .map(_e => ({ top: randPosition(), left: randPosition() }))
}