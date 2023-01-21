export const getRandomPosition = (
  numRows: number,
  numCols: number
): [number, number] => {
  const randomRow = Math.floor(Math.random() * numRows);
  const randomCol = Math.floor(Math.random() * numCols);
  return [randomRow, randomCol];
};

export const getRandomArea = (numRows: number, numCols: number) => {
  // get random area of 3x3
  const [randomRow, randomCol] = getRandomPosition(numRows, numCols);
  const randomArea = [
    [randomRow, randomCol],
    [randomRow, randomCol + 1],
    [randomRow, randomCol + 2],
    [randomRow + 1, randomCol],
    [randomRow + 1, randomCol + 1],
    [randomRow + 1, randomCol + 2],
    [randomRow + 2, randomCol],
    [randomRow + 2, randomCol + 1],
    [randomRow + 2, randomCol + 2],
  ];
  return randomArea;
};
