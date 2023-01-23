import { useCallback, useContext, useEffect } from "react";
import { findRelativeCoords, hoc, rollDice } from "helpers";
import { AppContext } from "state";
import { Direction } from "helpers/types";
import { UPDATE_CELLS, UPDATE_USER_DETAILS } from "state/actionTypes";
import {
  BOTTLE_POSITION,
  COLUMNS,
  HENRY_POSITION,
  ROWS,
} from "constants/board";

const container = hoc((props) => {
  const { state, dispatch } = useContext(AppContext);

  const { details } = state;

  const {
    bottlePosition,
    henryPosition,
    direction,
    isHenryTurn,
    step,
    started,
    done,
  } = details;

  const updatePlayerDetailsAndPosition = useCallback(
    (
      direction: Direction,
      step: number,
      position: { row: number; col: number }
    ) => {
      const [row, col] = isHenryTurn ? henryPosition : bottlePosition;

      const { row: newRow, col: newCol } = position;

      dispatch({
        type: UPDATE_USER_DETAILS,
        data: {
          direction,
          step,
          position: {
            type: isHenryTurn ? HENRY_POSITION : BOTTLE_POSITION,
            value: [position.row, position.col],
          },
          isHenryTurn: !isHenryTurn,
        },
      });

      if (isHenryTurn) {
        dispatch({
          type: UPDATE_CELLS,
          data: {
            position: { row, col },
            value: { isHenry: false },
          },
        });

        dispatch({
          type: UPDATE_CELLS,
          data: {
            position: { row: newRow, col: newCol },
            value: { isHenry: true },
          },
        });
        return;
      }

      dispatch({
        type: UPDATE_CELLS,
        data: {
          position: { row, col },
          value: { isBottle: false },
        },
      });

      dispatch({
        type: UPDATE_CELLS,
        data: {
          position: { row: newRow, col: newCol },
          value: { isBottle: true },
        },
      });
    },
    [henryPosition, dispatch, bottlePosition, isHenryTurn]
  );

  const disabled = !started || done;

  const handleRollDice = useCallback(() => {
    if (disabled) return;

    const [newDirection, step] = rollDice(direction);

    const playerPosition = isHenryTurn ? henryPosition : bottlePosition;

    const [newRow, newCol] = findRelativeCoords(
      newDirection,
      step,
      playerPosition,
      ROWS,
      COLUMNS
    );

    updatePlayerDetailsAndPosition(newDirection, step, {
      row: newRow,
      col: newCol,
    });
  }, [
    direction,
    henryPosition,
    disabled,
    bottlePosition,
    isHenryTurn,
    updatePlayerDetailsAndPosition,
  ]);

  const autoPlayBottle = useCallback(() => {
    if (isHenryTurn) return;
    if (done) return;

    setTimeout(() => {
      handleRollDice();
    }, 1000);
  }, [handleRollDice, isHenryTurn, done]);

  useEffect(() => {
    autoPlayBottle();
  }, [autoPlayBottle, isHenryTurn]);

  return {
    ...props,
    handleRollDice,
    direction,
    step,
    started,
    disabled,
  };
});

export default container;
