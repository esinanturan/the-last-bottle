import React from "react";
import { Cell } from "helpers/types";
import StyledCell from "./styled";

const CellComp = ({ cell }: { cell: Cell }) => {
  return (
    <StyledCell
      isHenry={cell.isHenry || false}
      isBottle={cell.isBottle || false}
      isGPArea={cell.isGPArea || false}
      isStart={cell.isStart}
    >
      *
    </StyledCell>
  );
};

export default CellComp;
