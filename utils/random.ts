const randPosition = () => `${Math.ceil(Math.random() * 90)}%`;
export const createRandomPos = (numberOfRandonPos: number) => {
  return Array(numberOfRandonPos)
    .fill('')
    .map(_e => ({ top: randPosition(), left: randPosition() }))
}