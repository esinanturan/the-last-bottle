import React from "react";
import { StyledContainer } from "./styled";

const Legend = () => {
  return (
    <StyledContainer>
      <div className="wrapper">
        <div className="flex">
          <span className="bottle" />
          <span>Bottle</span>
        </div>
        <div className="flex">
          <span className="henry" />
          <span>You</span>
        </div>
        <div className="flex">
          <span className="gp" />
          <span>GPgp Great Pasific garbage patch </span>
        </div>
      </div>
    </StyledContainer>
  );
};

export default Legend;
