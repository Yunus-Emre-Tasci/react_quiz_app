import { AnswerObject } from '@/pagesdeneme2';
import React from 'react'
import { ButtonWrapper, Wrapper } from './QuestionCard.styles';

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNumber: number;
  totalQuestion: number;
  number: number;
  TOTAL_QUESTIONS: number;
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
}) => {
  return (
    <>
      {userAnswer?.length === TOTAL_QUESTIONS ? (
        <h3>selam</h3>
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