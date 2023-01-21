import { Cell } from "helpers/types";
import { RESET_CELLS, UPDATE_CELLS } from "./actionTypes";
import { generateCells } from "helpers";
import { COLUMNS, ROWS } from "constants/board";

export type BoardState = {
  cells: Cell[][];
};

export const boardInitialState: BoardState = {
  cells: generateCells(ROWS, COLUMNS),
};

export const boardReducer = (context: any, action: any) => {
  if (action.type === UPDATE_CELLS) {
    const newCells = [...context.cells];
    const { position, value } = action.data;
    const { row, col } = position;
    if (newCells[row] && newCells[row][col]) {
      const currentCell = newCells[row][col];
      newCells[row][col] = { ...currentCell, ...value };
    }
    return {
      ...context,
      cells: newCells,
    };
  }
  if (action.type === RESET_CELLS) {
    return {
      cells: generateCells(ROWS, COLUMNS),
    };
  }
  return context;
};
