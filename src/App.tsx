import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
} from "react";

import { AppContext, State, initialState } from "state";
import { detailsReducer } from "state/details";
import { boardReducer } from "state/board";
import { BottomContainer } from "./styled";

import ControlMenu from "components/ControlMenu";
import Board from "components/Board";
import Legend from "components/Legend";
import StartMenu from "components/StartMenu";
import { INIT_CELLS, UPDATE_DETAILS } from "state/actionTypes";
import { CELL_SIZE, RANGE } from "constants/board";
import { useWindowSize } from "hooks";
import { getScaledArea, getScaledPosition } from "helpers/randomPosition";
import { usePrevious } from "hooks/usePrevious";

const App = () => {
  const controlMenuRef = useRef<HTMLDivElement>(null);
  const bottomContainerRef = useRef<HTMLDivElement>(null);

  const mainReducer = ({ board, details }: State, action: any) => ({
    board: boardReducer(board, action),
    details: detailsReducer(details, action),
  });

  const [state, dispatch] = useReducer(mainReducer, initialState);

  const { width, height } = useWindowSize();

  const { details, board } = state;

  const rows = useMemo(() => board.rows, [board.rows]);
  const columns = useMemo(() => board.columns, [board.columns]);

  const previousRows = usePrevious(rows);
  const previousColumns = usePrevious(columns);

  const [startPositionRow, startPositionCol] = useMemo(
    () => details.startPosition,
    [details.startPosition]
  );
  const [henryPositionRow, henryPositionCol] = useMemo(
    () => details.henryPosition,
    [details.henryPosition]
  );

  const [bottlePositionRow, bottlePositionCol] = useMemo(
    () => details.bottlePosition,
    [details.bottlePosition]
  );

  const [gpAreaPositionRow, gpAreaPositionCol] = useMemo(
    () => details.gpAreaPosition[0],
    [details.gpAreaPosition]
  );

  const updatePositions = useCallback(() => {
    if (startPositionCol === 0 && startPositionRow === 0) {
      return;
    }

    const newStartPosition = getScaledPosition(
      [startPositionRow, startPositionCol],
      previousRows,
      previousColumns,
      rows,
      columns
    );
    const newHenryPosition = getScaledPosition(
      [henryPositionRow, henryPositionCol],
      previousRows,
      previousColumns,
      rows,
      columns
    );
    const newBottlePosition = getScaledPosition(
      [bottlePositionRow, bottlePositionCol],
      previousRows,
      previousColumns,
      rows,
      columns
    );

    const newGpPosition = getScaledArea(
      rows,
      columns,
      RANGE,
      [gpAreaPositionRow, gpAreaPositionCol],
      previousRows,
      previousColumns
    );

    dispatch({
      type: UPDATE_DETAILS,
      data: {
        startPosition: newStartPosition,
        bottlePosition: newBottlePosition,
        henryPosition: newHenryPosition,
        gpAreaPosition: newGpPosition,
      },
    });
  }, [
    columns,
    rows,
    startPositionRow,
    startPositionCol,
    bottlePositionCol,
    bottlePositionRow,
    henryPositionCol,
    henryPositionRow,
    previousColumns,
    previousRows,
    gpAreaPositionRow,
    gpAreaPositionCol,
  ]);

  useEffect(() => {
    if (rows && columns) {
      updatePositions();
    }
  }, [rows, columns, updatePositions]);

  useLayoutEffect(() => {
    const controlMenuHeight = controlMenuRef.current?.clientHeight;
    const bottomContainerHeight = bottomContainerRef.current?.clientHeight;

    if (controlMenuHeight && bottomContainerHeight && width && height) {
      const rows = Math.floor(
        (height - controlMenuHeight - bottomContainerHeight) / CELL_SIZE
      );

      const columns = Math.floor(width / CELL_SIZE);

      dispatch({
        type: INIT_CELLS,
        data: {
          rows,
          columns,
        },
      });
    }
  }, [height, width]);

  return (
    <div>
      <AppContext.Provider value={{ state: state as State, dispatch }}>
        <ControlMenu forwardedRef={controlMenuRef} />
        <Board />
        <BottomContainer ref={bottomContainerRef}>
          <Legend />
          <StartMenu />
        </BottomContainer>
      </AppContext.Provider>
    </div>
  );
};

export default App;
