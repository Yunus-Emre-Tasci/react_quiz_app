import React from 'react'

type Props={
    question:string;
    answers:string[];
    callback:any;
    userAnswer:boolean
    questionNumber:number
    totalQuestion:number
}

const QuestionCard:React.FC<Props> = ({answers,callback,question,questionNumber,totalQuestion,userAnswer}) => {
  return (
    <div>
      <p className="number">
        Questin: {questionNumber} / {totalQuestion}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers?.map((answer) => (
          <div key={answer}>
            <button disabled={userAnswer} onClick={callback}>
                <span dangerouslySetInnerHTML={{__html:answer}}/>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard