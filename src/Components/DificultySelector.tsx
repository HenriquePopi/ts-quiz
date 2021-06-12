import React from "react";
import { Difficulty } from "../API";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  label {
    display: flex;
    flex-direction: column;
    width: 90px;
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
  }
`;
const DificultySelector: React.FC = () => {
  return (
    <Wrapper>
      <label>
        Easy
        <input type="radio" name="dificulty" value={Difficulty.EASY} />
      </label>
      <label>
        Medium
        <input type="radio" name="dificulty" value={Difficulty.MEDIUM} />
      </label>
      <label>
        Hard
        <input type="radio" name="dificulty" value={Difficulty.HARD} />
      </label>
    </Wrapper>
  );
};

export default DificultySelector;
