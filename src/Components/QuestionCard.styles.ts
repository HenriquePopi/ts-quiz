import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1100px;
  background: white;
  border-radius: 10px;
  border: 2px solid #c42d1f;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
  text-align: center;
  padding: 30px;
  p {
    font-size: 1rem;
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};
export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;
  :hover {
    opacity: 0.9;
  }
  button {
    cursor: pointer;
    user-select: none;
    font-size: 0.8rem;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    background: ${(props) =>
      props.correct
        ? "linear-gradient(90deg, #56ffa4, #59bc86)"
        : !props.correct && props.userClicked
        ? "linear-gradient(90deg, #FFD96E, #C3251F)"
        : "linear-gradient(90deg, #FFE17F, #F88A64)"};
    border: 3px solid #fff;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;

    text-shadow: 1px 2px 0px rgba(0, 0, 0, 0.25);
  }
`;
