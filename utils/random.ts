/**Create random position  */
const randPosition = () => `${Math.ceil(Math.random() * 90)}%`;

/**This function create random pos to x and y coord is used in <Circle/> component
 * @returns {Array<{top:string,left:string}>} Array wit two coords
 */
export const createRandomPos = (numberOfRandonPos: number) => {
  return Array(numberOfRandonPos)
    .fill('')
    .map(_e => ({ top: randPosition(), left: randPosition() }))
}