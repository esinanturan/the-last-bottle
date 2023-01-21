import { useContext } from "react";
import { hoc } from "helpers";
import { useCallback, useEffect } from "react";
import { AppContext } from "state";
import { UPDATE_DETAILS } from "state/actionTypes";

const container = hoc((props) => {
  const { state, dispatch } = useContext(AppContext);
  const { board, details } = state;
  const { cells } = board;
  const { bottlePosition, henryPosition } = details;

  const checkResult = useCallback(() => {
    const [row, col] = henryPosition;
    const currentPosition = cells[row][col];
    if (
      currentPosition.isGPArea ||
      (currentPosition.isBottle && !currentPosition.isStart)
    ) {
      dispatch({
        type: UPDATE_DETAILS,
        data: {
          winner: "Henry",
          done: 1,
          started: false,
        },
      });
    }

    const [bottleRow, bottleCol] = bottlePosition;
    const currentBottlePosition = cells[bottleRow][bottleCol];

    if (currentBottlePosition.isGPArea) {
      dispatch({
        type: UPDATE_DETAILS,
        data: {
          winner: "Bottle",
          done: 1,
          started: false,
        },
      });
    }
  }, [cells, henryPosition, dispatch, bottlePosition]);

  useEffect(() => {
    checkResult();
  }, [checkResult, henryPosition, bottlePosition]);

  return {
    ...props,
    cells,
  };
});

export default container;
