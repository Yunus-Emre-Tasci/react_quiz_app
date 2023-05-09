// import { shuffleArray } from "./utils";

// export type Question = {  // apiden gelen veri
//   category: string;
//   correct_answer: string;
//   difficulty: string;
//   incorrect_answers: string[];
//   question: string;
//   type: string;
// };

// export type QuestionState = Question & { answers: string[] };   //5. 1-12

// export enum Difficulty {
//   EASY = "easy",
//   MEDIUM = "medium",
//   HARD = "hard",
// }

// const intl = new Intl.DisplayNames(["tr"], { type: "language" });


// export const fetchQuizQuestions = async (
//   amount: number,
//   difficulty: string
// ) => {
//   const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}`;

//   const data = await (await fetch(endpoint)).json();
//   console.log(data.results);     // 4.  23-30

  // const intl =
  //   typeof Intl !== "undefined"
  //     ? new Intl.DisplayNames(["tr-TR"], { type: "language" })
  //     : undefined;

  // const intl = new Intl();

  // const language = navigator.language || "en-US";
  // const displayNames = new Intl.DisplayNames([language], { type: "language" }); //3. iki satır


  // return data.results.map((question: Question) => ({    //2.
    // ...question,
    // answers: shuffleArray([
    //   ...question.incorrect_answers,
    //   question.correct_answer,
    // ]),

    // ...question,
    // question: displayNames.of(question.question),
    // answers: shuffleArray([...question.incorrect_answers, question.correct_answer].map((answer) => {    //1.  4 satır
    //   return displayNames.of(answer);

    
    
    // const answers = shuffleArray([
    //   ...question.incorrect_answers,
    //   question.correct_answer,
    // ]);
    // const translatedAnswers = answers.map((answer) =>
    //   intl ? intl.of(answer).of("tr-TR") : answer
    // );
    // const translatedQuestion = intl
    //   ? intl.of(question.question).of("tr-TR")
    //   : question.question;
    // return {
    //   ...question,
    //   question: translatedQuestion,
    //   answers: translatedAnswers,
    // };
    
  // }))   //6. 73-74
// }))
  // const questions = data.results;
  // const turkishQuestions = questions.map((q: Question) => {
  //   const turkishQuestion = {
  //     ...q,
  //     question: q.question
  //       .replace(/(&quot;|&#039;)/g, "'")
  //       .replace(/(&ldquo;|&rdquo;)/g, '"')
  //       .replace(/(&eacute;)/g, "é")
  //       .toLocaleUpperCase("tr-TR"),
  //     answer:shuffleArray([...q.incorrect_answers.map((ans) =>
  //       ans
  //         .replace(/(&quot;|&#039;)/g, "'")
  //         .replace(/(&ldquo;|&rdquo;)/g, '"')
  //         .replace(/(&eacute;)/g, "é")
  //         .toLocaleUpperCase("tr-TR")
  //     ),q.correct_answer.toLocaleUpperCase("tr-TR")])  
  //   };
  //   return turkishQuestion;
  // });
// };    //7. 94


import { shuffleArray } from "./utils";

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export type QuestionsState = Question & { answers: string[] };

const fetchTranslatedText = async (text: string): Promise<string> => {
  const displayNames = new Intl.DisplayNames(["tr"], { type: "language" });
  const languageCode = navigator.language || "en-US";
  const languageWithoutRegionCode = languageCode.split("-")[0];
  const displayName = displayNames.of(languageWithoutRegionCode);
  const response = await fetch(
    `https://api.mymemory.translated.net/get?q=${text}&langpair=en|${languageWithoutRegionCode}`
  );
  const data = await response.json();
  return data.responseData.translatedText || text;
};

const translateQuestion = async (question: Question): Promise<Question> => {
  const translatedQuestion = await fetchTranslatedText(question.question);
  const translatedAnswers = await Promise.all(
    question.incorrect_answers
      .concat(question.correct_answer)
      .map(fetchTranslatedText)
  );
  const translatedCorrectAnswer = translatedAnswers.pop() as string;
  const translatedIncorrectAnswers = translatedAnswers as string[];
  return {
    ...question,
    question: translatedQuestion,
    correct_answer: translatedCorrectAnswer,
    incorrect_answers: translatedIncorrectAnswers,
  };
};

export const fetchQuizQuestions = async (
  amount: number,
  difficulty: Difficulty
): Promise<QuestionsState[]> => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
  const data = await (await fetch(endpoint)).json();
  const translatedQuestions = await Promise.all(
    data.results.map(translateQuestion)
  );
  return translatedQuestions.map((question: Question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};
