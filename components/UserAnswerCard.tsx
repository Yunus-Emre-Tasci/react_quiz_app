import { useContext } from "react";
import { UserAnswersContext } from "../context/UserAnswersProvider";

const UserAnswerCard = () => {

    const { userAnswers } = useContext(UserAnswersContext);

    console.log(userAnswers);

  return (
    <>
      {userAnswers.map((item, i) => (
        <div key={i}> {item.answer} </div>
      ))}
    </>
  );
};

export default UserAnswerCard;
