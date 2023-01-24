import { useContext, useCallback, useEffect } from "react";
import { hoc } from "helpers";
import { AppContext } from "state";
import { UPDATE_DETAILS } from "state/actionTypes";

const container = hoc((props) => {
  const { state, dispatch } = useContext(AppContext);
  const { board, details } = state;
  const { cells } = board;
  const { bottlePosition, henryPosition } = details;

  const checkResult = useCallback(() => {
    const [row, col] = henryPosition;

    if (cells.length === 0 || !cells[row]) return;

    const currentPosition = cells[row][col];
    if (
      (currentPosition && currentPosition.isGPArea) ||
      (currentPosition && currentPosition.isBottle && !currentPosition.isStart)
    ) {
      dispatch({
        type: UPDATE_DETAILS,
        data: {
          winner: "Henry",
          done: true,
          started: false,
        },
      });
    }

    const [bottleRow, bottleCol] = bottlePosition;
    const currentBottlePosition = cells[bottleRow][bottleCol];

    if (currentBottlePosition && currentBottlePosition.isGPArea) {
      dispatch({
        type: UPDATE_DETAILS,
        data: {
          winner: "Bottle",
          done: true,
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
