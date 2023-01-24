import { Cell } from "helpers/types";
import { INIT_CELLS, RESET_CELLS, UPDATE_CELLS } from "./actionTypes";
import { generateCells } from "helpers";

export type BoardState = {
  cells: Cell[][];
  rows?: number;
  columns?: number;
};

export const boardInitialState: () => BoardState = () => ({
  cells: [],
});

export const boardReducer = (context: any, action: any) => {
  if (action.type === INIT_CELLS) {
    const { rows, columns } = action.data;

    return {
      cells: generateCells(rows, columns),
      rows,
      columns,
    };
  }
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
      ...context,
      cells: generateCells(context.rows, context.columns),
    };
  }

  return context;
};
