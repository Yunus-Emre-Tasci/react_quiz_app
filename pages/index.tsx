import QuestionCard from "@/components/QuestionCarddeneme2";
import Head from "next/head"
import { useState } from "react";
import {Difficulty, fetchQuizQuestions,QuestionState} from "../API"
import {GlobalStyle, Wrapper} from "../styles/page.styles"

const TOTAL_QUESTIONS=10

export type AnswerObject={
  question:string
  answer:string
  correct:boolean
  correctAnswer:string
}

export default function Home() {

const [loading, setLoading] = useState(false)
const [questions, setQuestions] = useState < QuestionState[]>([]);
const [number, setNumber] = useState(0)
const [userAnswers, setUserAnswers] = useState <AnswerObject[]>([]);
const [gameOver, setGameOver] = useState(true)
const [score, setScore] = useState(0)
// 
// console.log(fetchQuizQuestions(10,Difficulty.EASY));

console.log(questions);

  const startTrivia=async()=>{
    setLoading(true);
    setGameOver(false); //çünkü yeni bir oyuna başlıyoruz.

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );

    setQuestions(newQuestions);
    setNumber(0); // soru çekildikten sonra sıfırlama işlemlerini yapıyoruz
    setUserAnswers([]);
    setScore(0);

    setLoading(false);
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if(!gameOver){

      const answer = e.currentTarget.value // e.target.value yazılsaydı hata alınırdı, tip hatası

      const correct=questions[number].correct_answer===answer

      correct&&setScore((prev)=>prev+1)

      const answerObject: AnswerObject = {
         question:questions[number].question,
         answer:answer,
         correct:correct,
         correctAnswer:questions[number].correct_answer
      };

      setUserAnswers((prev) => [...prev, answerObject]);

    }
  };

  const nextQuestion=()=>{

    const nextQuestion=number+1

    if (nextQuestion===TOTAL_QUESTIONS){
      setGameOver(true)
    } else{
      setNumber(nextQuestion);
    } 
  }

  return (
    <>
      <Head>
        <title>Quiz App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <GlobalStyle />
        <Wrapper>
          <h1>REACT QUIZ</h1>
          {(gameOver || userAnswers.length === TOTAL_QUESTIONS) && (
            <button className="start" onClick={startTrivia}>
              Start
            </button>
          )}
          {!gameOver && <p className="Score">Score: {score} </p>}
          {loading && <p>Loading Questions..</p>}
          {!loading && !gameOver && (
            <QuestionCard
              answers={questions[number].answers}
              callback={checkAnswer}
              question={questions[number].question}
              questionNumber={number + 1}
              totalQuestion={TOTAL_QUESTIONS}
              userAnswer={userAnswers ? userAnswers[number] : undefined}
            />
          )}
          {!loading &&
            !gameOver &&
            userAnswers.length === number + 1 &&
            number !== TOTAL_QUESTIONS - 1 && (
              <button className="next" onClick={nextQuestion}>
                Next Question
              </button>
            )}
        </Wrapper>
      </>
    </>
  );
}
