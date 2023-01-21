import styled from "styled-components";

const StyledCell = styled.span`
  padding: 3px 6px;
  border: 1px solid #000;
  font-size: 0.9rem;
  display: inline-block;
  ${({
    isHenry,
    isBottle,
    isGPArea,
    isStart,
  }: {
    isHenry: boolean;
    isBottle: boolean;
    isGPArea: boolean;
    isStart: boolean;
  }) => {
    if (isHenry && isBottle) {
      return "background: #f92;";
    }
    if (isStart) {
      return "background: #00f;";
    }
    if (isHenry) {
      return "background: #ff0;";
    }
    if (isBottle) {
      return "background: #000;";
    }
    if (isGPArea) {
      return "background: #f00;";
    }
  }}
`;

export default StyledCell;
