import { useContext } from "react";
import { UserAnswersContext } from "../context/UserAnswersProvider";
import { ButtonWrapper, Wrapper, Flex } from "./UserAnswerCard.styles";

const UserAnswerCard = () => {

    const { userAnswers } = useContext(UserAnswersContext);

    console.log(userAnswers);

  return (
    <Flex>
      {userAnswers.map((item, i) => (
        <Wrapper key={i}>
          <div> {i+1} - {item.question} </div>
        </Wrapper>
      ))}
    </Flex>
  );
};

export default UserAnswerCard;
