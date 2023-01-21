export type Direction =
  | "north"
  | "south"
  | "west"
  | "east"
  | "north-east"
  | "north-west"
  | "south-east"
  | "south-west";

export type Cell = {
  id: string;
  row: number;
  col: number;
  isHenry?: boolean;
  isBottle?: boolean;
  isGPArea?: boolean;
  isStart: boolean;
};
