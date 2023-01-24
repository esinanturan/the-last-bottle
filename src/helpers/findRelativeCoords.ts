import { DIRECTION_MAP, DIRECTIONS } from "constants/board";
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
    case DIRECTION_MAP.north:
      currentRow -= steps;
      break;
    case DIRECTION_MAP.south:
      currentRow += steps;
      break;
    case DIRECTION_MAP.west:
      currentCol -= steps;
      break;
    case DIRECTION_MAP.east:
      currentCol += steps;
      break;
    case DIRECTION_MAP.northEast:
      currentRow -= steps;
      currentCol += steps;
      break;
    case DIRECTION_MAP.northWest:
      currentRow -= steps;
      currentCol -= steps;
      break;
    case DIRECTION_MAP.southEast:
      currentRow += steps;
      currentCol += steps;
      break;
    case DIRECTION_MAP.southWest:
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

export const getOppositeDirection = (direction: Direction) => {
  const index = DIRECTIONS.indexOf(direction);
  return DIRECTIONS[(index + DIRECTIONS.length / 2) % DIRECTIONS.length];
};
