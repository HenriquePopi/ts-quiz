import styled from "styled-components";

type SelectionProps = {
  open: boolean;
};
export const Selection = styled.ul<SelectionProps>`
  min-width: 300px;
  height: ${(props) => (props.open ? "300px" : "35px")};
  margin: 20px;
  padding: 0;
  background: none;
  border-radius: 5px;
  border: 2px solid;
  font-weight: bold;
  list-style: none;
  transition: all 150ms ease;
  overflow-y: ${(props) => (props.open ? "scroll" : "hidden")};
  position: absolute;
  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: #ffda6d;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    border: 1px solid black;
  }

  li {
    padding: 3px;
    :hover {
      background: rgba(189, 43, 26, 0.6);
      border-radius: 5px;
      cursor: pointer;
    }
  }
`;

export const SelectionWrappert = styled.div`
  position: relative;
  margin-left: -320px;
  height: 300px;
`;
