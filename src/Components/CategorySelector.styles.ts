import styled from "styled-components";

export const Selection = styled.ul`
  min-width: 300px;
  height: 35px;
  margin: 20px;
  padding: 0;
  background: none;
  border-radius: 5px;
  border: 2px solid;
  font-weight: bold;
  list-style: none;
  transition: all 150ms ease;
  overflow-y: scroll;
  li {
    padding: 3px;
    :hover {
      background: rgba(189, 43, 26, 0.6);
      border-radius: 5px;
    }
  }
`;
