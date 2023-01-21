import React from "react";
import { Cell } from "helpers/types";
import CellComp from "components/Cell";
import container from "./container";
import { StyledBoard } from "./styled";

const XBoard = ({ cells }: { cells: Cell[][] }) => {
  return (
    <StyledBoard>
      {cells.map((row: Cell[], rowIndex: number) => (
        <div key={rowIndex}>
          {row.map((cell: Cell) => {
            return <CellComp key={cell.id} cell={cell} />;
          })}
        </div>
      ))}
    </StyledBoard>
  );
};

export default container(XBoard);
