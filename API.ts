import { shuffleArray } from "./utils";

export type Question = {  // apiden gelen veri
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuestionState = Question & { answers: string[] };

// export enum Difficulty {
//   EASY = "easy",
//   MEDIUM = "medium",
//   HARD = "hard",
// }

export const fetchQuizQuestions = async (
  amount: number,
  difficulty: string
) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}`;

  const data = await (await fetch(endpoint)).json();
  // console.log(data.results);
  // return data.results.map((question: Question) => ({
  //   ...question,
  //   answers: shuffleArray([
  //     ...question.incorrect_answers,
  //     question.correct_answer,
  //   ]),
  // }));
  const questions = data.results;
  const turkishQuestions = questions.map((q: Question) => {
    const turkishQuestion = {
      ...q,
      question: q.question
        .replace(/(&quot;|&#039;)/g, "'")
        .replace(/(&ldquo;|&rdquo;)/g, '"')
        .replace(/(&eacute;)/g, "é")
        .toLocaleUpperCase("tr-TR"),
      answer:shuffleArray([...q.incorrect_answers.map((ans) =>
        ans
          .replace(/(&quot;|&#039;)/g, "'")
          .replace(/(&ldquo;|&rdquo;)/g, '"')
          .replace(/(&eacute;)/g, "é")
          .toLocaleUpperCase("tr-TR")
      ),q.correct_answer.toLocaleUpperCase("tr-TR")])  
    };
    return turkishQuestion;
  });
  // return turkishQuestions;
};
