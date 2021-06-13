import React from "react";
import { shuffleArray } from "./utils";
export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}
export type Question = {
  cateory: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuestionState = Question & { answers: string[] };

export const fetchQuizQuestions = async (
  amount: number,
  difficult: Difficulty,
  category: string
) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficult${difficult}&type=multiple`;
  console.log(endpoint);
  const data = await (await fetch(endpoint)).json();
  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};

export const fetchCategory = async () => {
  const endpoint = "https://opentdb.com/api_category.php";
  const data = await (await fetch(endpoint)).json();
  return data.trivia_categories;
};
