import { createContext } from "react";
import { BoardState, boardInitialState } from "./board";
import { DetailState, detailInitialState } from "./details";

export type State = {
  board: BoardState;
  details: DetailState;
};

export const initialState: State = {
  board: boardInitialState,
  details: detailInitialState(),
};

export const AppContext = createContext<{
  state: State;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});
