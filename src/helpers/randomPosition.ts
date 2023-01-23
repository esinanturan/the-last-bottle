export const getRandomPosition = (
  numRows: number,
  numCols: number
): [number, number] => {
  const randomRow = Math.floor(Math.random() * numRows);
  const randomCol = Math.floor(Math.random() * numCols);
  return [randomRow, randomCol];
};

export const getRandomArea = (
  numRows: number,
  numCols: number,
  range: number
) => {
  const [randomRow, randomCol] = getRandomPosition(numRows, numCols);
  const randomArea = [];
  for (let row = randomRow; row < randomRow + range; row++) {
    for (let col = randomCol; col < randomCol + range; col++) {
      randomArea.push([row, col]);
    }
  }
  return randomArea;
};
