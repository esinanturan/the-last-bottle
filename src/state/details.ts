import {
  UPDATE_USER_DETAILS,
  UPDATE_DETAILS,
  RESET_DETAILS,
} from "state/actionTypes";
import { Direction } from "helpers/types";
import { getRandomArea, getRandomPosition } from "helpers";
import { RANGE } from "constants/board";

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

export const detailsDefaultState: DetailState = {
  isHenryTurn: false,
  startPosition: [0, 0],
  gpAreaPosition: [],
  henryPosition: [0, 0],
  bottlePosition: [0, 0],
  direction: null,
  step: 0,
  winner: null,
  done: false,
  started: false,
};

export const initializeDetailState: (
  rows: number,
  columns: number
) => DetailState = (rows: number, columns: number) => {
  const startPosition = getRandomPosition(rows, columns);
  return {
    isHenryTurn: false,
    startPosition,
    gpAreaPosition: rows ? getRandomArea(rows, columns, RANGE) : [],
    henryPosition: rows ? startPosition : [0, 0],
    bottlePosition: rows ? startPosition : [0, 0],
    direction: null,
    step: 0,
    winner: null,
    done: false,
    started: false,
  };
};

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
    const { rows, columns } = action.data;
    return initializeDetailState(rows, columns);
  }
  return context;
};
