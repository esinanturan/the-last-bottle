import React from "react";
import { Direction } from "helpers/types";
import container from "./container";
import { MenuContainer } from "./styled";

const ControlMenu = ({
  handleRollDice,
  direction,
  step,
}: {
  handleRollDice: () => void;
  direction: Direction;
  step: number;
  disabled: boolean;
}) => {
  return (
    <MenuContainer>
      <div>
        <button onClick={handleRollDice}>Roll Dice</button>
      </div>
      <div>
        <span>Direction: {direction}</span>
      </div>
      <div>
        <span>Step: {step}</span>
      </div>
    </MenuContainer>
  );
};

export default container(ControlMenu);
