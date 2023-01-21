import React, { useReducer } from "react";

import { AppContext, State, initialState } from "state";
import { detailsReducer } from "state/details";
import { boardReducer } from "state/board";
import { BottomContainer } from "./styled";

import ControlMenu from "components/ControlMenu";
import Board from "components/Board";
import Legend from "components/Legend";
import StartMenu from "components/StartMenu";

const App = () => {
  const mainReducer = ({ board, details }: State, action: any) => ({
    board: boardReducer(board, action),
    details: detailsReducer(details, action),
  });

  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <div>
      <AppContext.Provider value={{ state: state as State, dispatch }}>
        <ControlMenu />
        <Board />
        <BottomContainer>
          <Legend />
          <StartMenu />
        </BottomContainer>
      </AppContext.Provider>
    </div>
  );
};

export default App;
