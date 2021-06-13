import React from "react";
import styled from "styled-components";

type WrapperProps = {
  dificulty?: string;
};
const Wrapper = styled.div<WrapperProps>`
  display: flex;
  justify-content: center;
  button {
    transition: 0.2s;
    display: flex;
    flex-direction: column;
    width: 90px;
    margin: 10px;
    align-items: center;
    text-align: center;
    font-family: Fascinate Impact, Haettenschweiler, "Arial Narrow Bold",
      sans-serif, Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    background-image: linear-gradient(180deg, #000, #d42825);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    font-size: 20px;
    border: none;
    cursor: pointer;
  }

  button:nth-child(1) {
    transform: ${(props) =>
      props.dificulty == "easy" ? "scale(1.6)" : "none"};
  }
  button:nth-child(2) {
    transform: ${(props) =>
      props.dificulty == "medium" ? "scale(1.6)" : "none"};
  }
  button:nth-child(3) {
    transform: ${(props) =>
      props.dificulty == "hard" ? "scale(1.6)" : "none"};
  }
`;
type Props = {
  callBack: (dificulty: string) => void;
  selected: string;
};

const DificultySelector: React.FC<Props> = ({ callBack, selected }) => {
  return (
    <Wrapper dificulty={selected}>
      <button onClick={() => callBack("easy")}>Easy</button>
      <button onClick={() => callBack("medium")}>Medium</button>
      <button onClick={() => callBack("hard")}>Hard</button>
    </Wrapper>
  );
};

export default DificultySelector;
