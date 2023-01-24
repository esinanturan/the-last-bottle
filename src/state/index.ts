import { createContext } from "react";
import { BoardState, boardInitialState } from "./board";
import { DetailState, detailsDefaultState } from "./details";

export type State = {
  board: BoardState;
  details: DetailState;
};

export const initialState: State = {
  board: boardInitialState(),
  details: detailsDefaultState,
};

export const AppContext = createContext<{
  state: State;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});
