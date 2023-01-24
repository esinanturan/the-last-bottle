import React from "react";
import { StartMenuContainer } from "./styled";
import container from "./container";

const StartMenu = ({
  handleStart,
  handleReset,
  started,
  done,
  winner,
}: {
  handleStart: () => void;
  handleReset: () => void;
  started: boolean;
  done: boolean;
  winner: string;
}) => {
  return (
    <StartMenuContainer>
      <button
        className={started || done ? "button reset" : "button start"}
        onClick={started || done ? handleReset : handleStart}
      >
        {started || done ? "Reset" : "Start"}
      </button>
      {done ? <div className="message">{winner} won!</div> : null}
    </StartMenuContainer>
  );
};
export default container(StartMenu);
