import styled, { createGlobalStyle } from "styled-components";
import BGimage from "./images/apple.jpg";

export const GlobalStyle = createGlobalStyle`

html{
    height: 100%;

}
body{
    background-image: url(${BGimage});
    background-size: cover;
    margin: 0;
    padding:0 20px;
    display: flex;
    justify-content: center;

}

*{
    box-sizing: border-box;
    font-family: "Catamaran", sans-serif;
}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .score {
    font-size: 2rem;
    margin: 0;
  }
  h1 {
    font-size: 5rem;
    font-family: Fascinate Impact, Haettenschweiler, "Arial Narrow Bold",
      sans-serif, Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    background-image: linear-gradient(180deg, #000, #d428258);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
  }
`;
