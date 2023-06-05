import React, { createContext, useState, ReactNode } from "react";

type UserAnswersContextType = {
  userAnswers: any[]; // userAnswers veri yapısını burada belirtmelisiniz
  setUserAnswers: React.Dispatch<React.SetStateAction<any[]>>; // setUserAnswers fonksiyonunun türünü belirtmelisiniz
};

export const UserAnswersContext = createContext<UserAnswersContextType>({
  userAnswers: [],
  setUserAnswers: () => {},
});

type UserAnswersProviderProps = {
  children: ReactNode;
};

const UserAnswersProvider = ({ children }: UserAnswersProviderProps) => {
  const [userAnswers, setUserAnswers] = useState<any[]>([]);

  return (
    <UserAnswersContext.Provider value={{ userAnswers, setUserAnswers }}>
      {children}
    </UserAnswersContext.Provider>
  );
};

export default UserAnswersProvider;
