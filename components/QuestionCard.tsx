import { AnswerObject } from '../type';
import React from 'react'
import { ButtonWrapper, Wrapper } from './QuestionCard.styles';
import Link from 'next/link';

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNumber: number;
  totalQuestion: number;
  number: number;
  TOTAL_QUESTIONS: number;
  userAnswers: AnswerObject[] | undefined;
  score: number;
};

const QuestionCard: React.FC<Props> = ({
  answers,
  callback,
  question,
  questionNumber,
  totalQuestion,
  userAnswer,
  number,
  TOTAL_QUESTIONS,
  userAnswers,
  score,
}) => {
  return (
    <>
      {userAnswers?.length === TOTAL_QUESTIONS ? (
        <Wrapper>
          <div className="">
            <span>
              {score > 7 ? (
                <h2>Good Score!</h2>
              ) : score < 4 ? (
                <h2>Bad Score!</h2>
              ) : (
                <h2>You need some more work!</h2>
              )}
            </span>
            <Link href="answers">
              <button className='show'>Show My Answers</button>
            </Link>
          </div>
        </Wrapper>
      ) : (
        <Wrapper>
          <p className="number">
            Question: {questionNumber} / {totalQuestion}
          </p>
          <p dangerouslySetInnerHTML={{ __html: question }} />
          <div>
            {answers?.map((answer) => (
              <ButtonWrapper
                correct={userAnswer?.correctAnswer === answer}
                userClicked={userAnswer?.answer === answer}
                key={answer}
              >
                <button
                  disabled={userAnswer ? true : false}
                  value={answer}
                  onClick={callback}
                >
                  <span dangerouslySetInnerHTML={{ __html: answer }} />
                </button>
              </ButtonWrapper>
            ))}
          </div>
        </Wrapper>
      )}
    </>
    // <Wrapper>
    //   <p className="number">
    //     Question: {questionNumber} / {totalQuestion}
    //   </p>
    //   <p dangerouslySetInnerHTML={{ __html: question }} />
    //   <div>
    //     {answers?.map((answer) => (
    //       <ButtonWrapper
    //         correct={userAnswer?.correctAnswer === answer}
    //         userClicked={userAnswer?.answer === answer}
    //         key={answer}
    //       >
    //         <button
    //           disabled={userAnswer ? true : false}
    //           value={answer}
    //           onClick={callback}
    //         >
    //           <span dangerouslySetInnerHTML={{ __html: answer }} />
    //         </button>
    //       </ButtonWrapper>
    //     ))}
    //   </div>
    // </Wrapper>
  );
};

export default QuestionCard