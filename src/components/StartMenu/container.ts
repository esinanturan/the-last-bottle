import { hoc, updateArea, updateCells } from "helpers";
import { useCallback, useContext } from "react";
import { AppContext } from "state";
import { RESET_CELLS, RESET_DETAILS, UPDATE_DETAILS } from "state/actionTypes";

const container = hoc((props) => {
  const { state, dispatch } = useContext(AppContext);
  const { details } = state;
  const {
    startPosition,
    bottlePosition,
    henryPosition,
    gpAreaPosition,
    started,
    done,
    winner,
  } = details;

  const handleStart = useCallback(() => {
    updateCells(startPosition, { isStart: true })(dispatch);
    updateCells(henryPosition, { isHenry: true })(dispatch);
    updateArea(gpAreaPosition, { isGPArea: true })(dispatch);
    updateCells(bottlePosition, { isBottle: true })(dispatch);

    dispatch({
      type: UPDATE_DETAILS,
      data: {
        started: true,
        done: false,
      },
    });
  }, [bottlePosition, gpAreaPosition, henryPosition, startPosition, dispatch]);

  const handleReset = useCallback(() => {
    dispatch({
      type: RESET_CELLS,
    });
    dispatch({
      type: RESET_DETAILS,
    });
  }, [dispatch]);

  return {
    ...props,
    handleStart,
    handleReset,
    started,
    done,
    winner,
  };
});

export default container;
