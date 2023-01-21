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
  span.bottle {
    display: inline-block;
    width: 20px;
    height: 20px;
    background: #00f;
  }
  span.henry {
    display: inline-block;
    width: 20px;
    height: 20px;
    background: #ff0;
  }
  span.gp {
    display: inline-block;
    width: 20px;
    height: 20px;
    background: #f00;
  }
`;
