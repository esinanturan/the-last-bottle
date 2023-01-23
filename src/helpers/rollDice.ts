import { getOppositeDirection } from "./findRelativeCoords";
import { Direction } from "./types";
import { DIRECTIONS } from "constants/board";

export const rollDice = (
  playerDirection: Direction | null
): [Direction, number] => {
  let directions = DIRECTIONS;

  if (playerDirection) {
    const opposite = getOppositeDirection(playerDirection);

    directions = directions.filter(
      (item) => ![playerDirection, opposite].includes(item)
    );
  }
  const directionDice = Math.floor(Math.random() * directions.length) + 1;
  const stepsDice = Math.floor(Math.random() * 6) + 1;

  const newDirection = directions[directionDice - 1] as Direction;
  return [newDirection, stepsDice];
};
