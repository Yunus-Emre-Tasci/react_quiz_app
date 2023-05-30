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
  console.log(data.results);     


  return data.results.map((question: Question) => ({   
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
}))
};


// import { shuffleArray } from "./utils";

// export type Question = {
//   category: string;
//   correct_answer: string;
//   difficulty: string;
//   incorrect_answers: string[];
//   question: string;
//   type: string;
// };

// export enum Difficulty {
//   EASY = "easy",
//   MEDIUM = "medium",
//   HARD = "hard",
// }

// export type QuestionsState = Question & { answers: string[] };

// const fetchTranslatedText = async (text: string): Promise<string> => {
//   const displayNames = new Intl.DisplayNames(["tr"], { type: "language" });
//   const languageCode = navigator.language || "en-US";
//   const languageWithoutRegionCode = languageCode.split("-")[0];
//   const displayName = displayNames.of(languageWithoutRegionCode);
//   const response = await fetch(
//     `https://api.mymemory.translated.net/get?q=${text}&langpair=en|${languageWithoutRegionCode}`
//   );
//   const data = await response.json();
//   return data.responseData.translatedText || text;
// };

// const translateQuestion = async (question: Question): Promise<Question> => {
//   const translatedQuestion = await fetchTranslatedText(question.question);
//   const translatedAnswers = await Promise.all(
//     question.incorrect_answers
//       .concat(question.correct_answer)
//       .map(fetchTranslatedText)
//   );
//   const translatedCorrectAnswer = translatedAnswers.pop() as string;
//   const translatedIncorrectAnswers = translatedAnswers as string[];
//   return {
//     ...question,
//     question: translatedQuestion,
//     correct_answer: translatedCorrectAnswer,
//     incorrect_answers: translatedIncorrectAnswers,
//   };
// };

// export const fetchQuizQuestions = async (
//   amount: number,
//   difficulty: string
// ): Promise<QuestionsState[]> => {
//   const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
//   const data = await (await fetch(endpoint)).json();
//   const translatedQuestions = await Promise.all(
//     data.results.map(translateQuestion)
//   );
//   return translatedQuestions.map((question: Question) => ({
//     ...question,
//     answers: shuffleArray([
//       ...question.incorrect_answers,
//       question.correct_answer,
//     ]),
//   }));
// };
