export const ROWS = 10;
export const COLUMNS = 10;
export const RANGE = 3;
export const CELL_SIZE = 30;

export const HENRY_POSITION = "henryPosition";
export const BOTTLE_POSITION = "bottlePosition";

export enum DIRECTION_MAP {
  north = "north",
  south = "south",
  east = "east",
  west = "west",
  northEast = "north-east",
  northWest = "north-west",
  southEast = "south-east",
  southWest = "south-west",
}

export const DIRECTIONS = [
  DIRECTION_MAP.north,
  DIRECTION_MAP.northEast,
  DIRECTION_MAP.east,
  DIRECTION_MAP.southEast,
  DIRECTION_MAP.south,
  DIRECTION_MAP.southWest,
  DIRECTION_MAP.west,
  DIRECTION_MAP.northWest,
];
