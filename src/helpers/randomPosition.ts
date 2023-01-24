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

export const getScaledArea = (
  numRows: number,
  numCols: number,
  range: number,
  position: [number, number],
  previousRows: number,
  previousColumns: number
) => {
  const [randomRow, randomCol] = getScaledPosition(
    position,
    previousRows,
    previousColumns,
    numRows,
    numCols
  );
  const randomArea = [];
  for (let row = randomRow; row < randomRow + range; row++) {
    for (let col = randomCol; col < randomCol + range; col++) {
      randomArea.push([row, col]);
    }
  }
  return randomArea;
};

export const getScaledPosition = (
  position: [number, number],
  previousRows: number,
  previousColumns: number,
  numRows: number,
  numCols: number
): [number, number] => {
  const [row, col] = position;

  const newRow = Math.floor((row * numRows) / previousRows);
  const newCol = Math.floor((col * numCols) / previousColumns);

  return [newRow, newCol];
};
