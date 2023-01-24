import { hoc, updateArea, updateCells } from "helpers";
import { useCallback, useContext, useEffect } from "react";
import { AppContext } from "state";
import { RESET_CELLS, RESET_DETAILS, UPDATE_DETAILS } from "state/actionTypes";

const container = hoc((props) => {
  const { state, dispatch } = useContext(AppContext);
  const { details, board } = state;
  const { rows, columns } = board;

  const {
    startPosition,
    bottlePosition,
    henryPosition,
    gpAreaPosition,
    started,
    done,
    winner,
  } = details;

  const initiliazeDetails = useCallback(() => {
    updateCells(startPosition, { isStart: true })(dispatch);
    updateCells(henryPosition, { isHenry: true })(dispatch);
    updateArea(gpAreaPosition, { isGPArea: true })(dispatch);
    updateCells(bottlePosition, { isBottle: true })(dispatch);
  }, [bottlePosition, gpAreaPosition, henryPosition, startPosition, dispatch]);

  const handleStart = useCallback(() => {
    dispatch({
      type: RESET_DETAILS,
      data: { rows, columns },
    });
    dispatch({
      type: UPDATE_DETAILS,
      data: {
        started: true,
        done: false,
      },
    });
  }, [columns, rows, dispatch]);

  const handleReset = useCallback(() => {
    dispatch({
      type: RESET_CELLS,
    });
    dispatch({
      type: RESET_DETAILS,
      data: { rows, columns },
    });
  }, [dispatch, rows, columns]);

  useEffect(() => {
    if (started) {
      initiliazeDetails();
    }
  }, [
    started,
    initiliazeDetails,
    startPosition,
    bottlePosition,
    henryPosition,
    gpAreaPosition,
  ]);

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
