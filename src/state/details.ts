import {
  UPDATE_USER_DETAILS,
  UPDATE_DETAILS,
  RESET_DETAILS,
} from "state/actionTypes";
import { Direction } from "helpers/types";
import { getRandomArea, getRandomPosition } from "helpers";
import { COLUMNS, ROWS } from "constants/board";

const startPosition = getRandomPosition(ROWS, COLUMNS);

export type DetailState = {
  isHenryTurn: boolean;
  startPosition: [number, number];
  gpAreaPosition: number[][];
  henryPosition: [number, number];
  bottlePosition: [number, number];
  direction: Direction | null;
  step: number;
  winner: "Henry" | "Bottle" | null;
  done: boolean;
  started: boolean;
};

export const detailInitialState: () => DetailState = () => ({
  isHenryTurn: false,
  startPosition,
  gpAreaPosition: getRandomArea(ROWS, COLUMNS),
  henryPosition: startPosition,
  bottlePosition: startPosition,
  direction: null,
  step: 0,
  winner: null,
  done: false,
  started: false,
});

export const detailsReducer = (
  context: DetailState,
  action: { type: string; data: any }
) => {
  if (action.type === UPDATE_USER_DETAILS) {
    const { direction, step, position, isHenryTurn } = action.data;
    return {
      ...context,
      direction,
      step,
      isHenryTurn,
      [position.type]: position.value,
    };
  }
  if (action.type === UPDATE_DETAILS) {
    return {
      ...context,
      ...action.data,
    };
  }
  if (action.type === RESET_DETAILS) {
    return {
      ...detailInitialState(),
    };
  }
  return context;
};
