import { createContext, useState, ReactNode } from "react";
import {AnswerObject} from "../type"

type UserAnswersContextType = {
  userAnswers: AnswerObject[];
  setUserAnswers: React.Dispatch<React.SetStateAction<AnswerObject[]>>;
};

export const UserAnswersContext = createContext<UserAnswersContextType>({
  userAnswers: [],
  setUserAnswers: () => {},
});

type UserAnswersProviderProps = {
  children: ReactNode;
};

const UserAnswersProvider = ({ children }: UserAnswersProviderProps) => {
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);

  return (
    <UserAnswersContext.Provider value={{ userAnswers, setUserAnswers }}>
      {children}
    </UserAnswersContext.Provider>
  );
};

export default UserAnswersProvider;
