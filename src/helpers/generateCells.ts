import { Cell } from "./types";

export const generateCells = (ROWS: number, COLS: number) => {
  const cells: Cell[][] = [];
  for (let row = 0; row < ROWS; ++row) {
    cells.push([]);
    for (let col = 0; col < COLS; ++col) {
      cells[row].push({
        id: `${row}-${col}`,
        row,
        col,
        isStart: false,
      });
    }
  }
  return cells;
};
