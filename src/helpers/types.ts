import { DIRECTION_MAP } from "constants/board";

export type Direction = DIRECTION_MAP;

export type Cell = {
  id: string;
  row: number;
  col: number;
  isHenry?: boolean;
  isBottle?: boolean;
  isGPArea?: boolean;
  isStart: boolean;
};
