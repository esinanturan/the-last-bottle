import React, { useLayoutEffect, useReducer, useRef } from "react";

import { AppContext, State, initialState } from "state";
import { detailsReducer } from "state/details";
import { boardReducer } from "state/board";
import { BottomContainer } from "./styled";

import ControlMenu from "components/ControlMenu";
import Board from "components/Board";
import Legend from "components/Legend";
import StartMenu from "components/StartMenu";
import { INIT_CELLS, RESET_DETAILS } from "state/actionTypes";
import { CELL_SIZE } from "constants/board";

const App = () => {
  const controlMenuRef = useRef<HTMLDivElement>(null);
  const bottomContainerRef = useRef<HTMLDivElement>(null);

  const mainReducer = ({ board, details }: State, action: any) => ({
    board: boardReducer(board, action),
    details: detailsReducer(details, action),
  });

  const [state, dispatch] = useReducer(mainReducer, initialState);

  useLayoutEffect(() => {
    const controlMenuHeight = controlMenuRef.current?.clientHeight;
    const bottomContainerHeight = bottomContainerRef.current?.clientHeight;

    if (controlMenuHeight && bottomContainerHeight) {
      dispatch({
        type: INIT_CELLS,
        data: {
          rows: Math.floor(
            (window.innerHeight - controlMenuHeight - bottomContainerHeight) /
              CELL_SIZE
          ),
          columns: Math.floor(window.innerWidth / CELL_SIZE),
        },
      });
    }
  }, []);

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
