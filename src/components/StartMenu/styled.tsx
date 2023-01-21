import styled from "styled-components";

export const StartMenuContainer = styled.div`
  flex: 1;
  display: flex;
  padding: 1rem;
  align-items: center;
  button.button {
    border: 1px solid #000;
    padding: 0.3rem 1.2rem;
    cursor: pointer;
    &.start {
      background: lightgreen;
    }
    &.reset {
      background: lightcoral;
    }
  }
  div.message {
    display: flex;
    margin-left: 1rem;
  }
`;
