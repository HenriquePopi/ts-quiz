import React from "react";
import { fetchQuizQuestions, Difficulty, QuestionState } from "./API";

//Components
import QuestionCard from "./Components/QuestionCard";
import CategorySelector from "./Components/CategorySelector";

import { GlobalStyle, Wrapper } from "./App.styles";
const TORAL_QUESTIONS = 10;

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

function App() {
  const [loading, setLoading] = React.useState(false);
  const [questions, setQuestions] = React.useState<QuestionState[]>([]);
  const [number, setNumber] = React.useState(0);
  const [userAnswers, setUserAnswers] = React.useState<AnswerObject[]>([]);
  const [score, setScore] = React.useState(0);
  const [gameOver, setGameOver] = React.useState(true);
  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    setQuestions(await fetchQuizQuestions(TORAL_QUESTIONS, Difficulty.HARD));
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    const answer = e.currentTarget.value;
    const correct = questions[number].correct_answer === answer;
    if (correct) setScore((s) => s + 1);
    setUserAnswers([
      ...userAnswers,
      {
        question: questions[number].question,
        answer: answer,
        correct: correct,
        correctAnswer: questions[number].correct_answer,
      },
    ]);
  };
  const nextQuestion = () => setNumber((n) => n + 1);
  return (
    <>
      <GlobalStyle />
      <CategorySelector />
      <Wrapper>
        <h1>Quiz</h1>
        {gameOver || userAnswers.length === TORAL_QUESTIONS ? (
          <button className="start" onClick={startTrivia}>
            Start
          </button>
        ) : null}
        {!gameOver && <p className="score">Score : {score}</p>}
        {loading && <p>Loading Questions...</p>}
        {questions.length && !gameOver && (
          <QuestionCard
            questionNumber={number + 1}
            totalQuestions={TORAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )}

        {!gameOver &&
          !loading &&
          userAnswers.length === number + 1 &&
          number < TORAL_QUESTIONS - 1 && (
            <button className="next" onClick={nextQuestion}>
              Next
            </button>
          )}
      </Wrapper>
    </>
  );
}

export default App;
