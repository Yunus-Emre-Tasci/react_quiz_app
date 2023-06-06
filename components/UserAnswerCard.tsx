import { useContext } from "react";
import { UserAnswersContext } from "../context/UserAnswersProvider";

const UserAnswerCard = () => {

    const { userAnswers } = useContext(UserAnswersContext);

    console.log(userAnswers);

  return <div>UserAnswerCard</div>;
};

export default UserAnswerCard;
