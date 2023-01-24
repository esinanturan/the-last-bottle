import { UPDATE_CELLS } from "state/actionTypes";
import { Cell } from "./types";
import { Dispatch } from "react";

export const updateCells =
  (position: number[], state: Partial<Cell>) => (dispatch: Dispatch<any>) => {
    const [row, col] = position;
    dispatch({
      type: UPDATE_CELLS,
      data: {
        position: { row, col },
        value: state,
      },
    });
  };

export const updateArea =
  (area: number[][], state: Partial<Cell>) => (dispatch: Dispatch<any>) => {
    area.forEach((coords) => {
      dispatch({
        type: UPDATE_CELLS,
        data: {
          position: { row: coords[0], col: coords[1] },
          value: state,
        },
      });
    });
  };
