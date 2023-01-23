import styled from "styled-components";

export const StyledContainer = styled.div`
  div.wrapper {
    padding: 0.5rem 1rem;
    display: flex;
    border: 1px solid #000;
    flex-direction: column;
  }
  div.flex {
    display: flex;
  }
  span {
    margin-right: 0.5rem;
  }
  span.cell {
    display: inline-block;
    width: 20px;
    height: 20px;
    &.bottle {
      background: #000;
    }
    &.start {
      background: #00f;
    }
    &.henry {
      background: #ff0;
    }
    &.gp {
      background: #f00;
    }
  }
`;
