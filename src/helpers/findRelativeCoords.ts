import { Direction } from "./types";

export const findRelativeCoords = (
  direction: Direction,
  steps: number,
  positions: number[],
  totalRows: number,
  totalCols: number
) => {
  let [currentRow, currentCol] = positions;
  switch (direction) {
    case "north":
      currentRow -= steps;
      break;
    case "south":
      currentRow += steps;
      break;
    case "west":
      currentCol -= steps;
      break;
    case "east":
      currentCol += steps;
      break;
    case "north-east":
      currentRow -= steps;
      currentCol += steps;
      break;
    case "north-west":
      currentRow -= steps;
      currentCol -= steps;
      break;
    case "south-east":
      currentRow += steps;
      currentCol += steps;
      break;
    case "south-west":
      currentRow += steps;
      currentCol -= steps;
      break;
  }
  if (currentRow < 0) {
    currentRow = 0;
  }
  if (currentRow >= totalRows) {
    currentRow = totalRows - 1;
  }
  if (currentCol < 0) {
    currentCol = 0;
  }
  if (currentCol >= totalCols) {
    currentCol = totalCols - 1;
  }
  return [currentRow, currentCol];
};

const directions = [
  "north",
  "north-east",
  "east",
  "south-east",
  "south",
  "south-west",
  "west",
  "north-west",
];

export const getOppositeDirection = (direction: Direction) => {
  const index = directions.indexOf(direction);
  return directions[(index + directions.length / 2) % directions.length];
};
