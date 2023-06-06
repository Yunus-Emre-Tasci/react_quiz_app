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
          <p>
            {" "}
            {i + 1} - {item.question}{" "}
          </p>
          <div>
            <ButtonWrapper correct={item.correct}>
              <button value={item.answer}>
                <span dangerouslySetInnerHTML={{ __html: item.answer }} />
              </button>
            </ButtonWrapper>
            <ButtonWrapper correct={item.correct}>
              <button
                value={item.correctAnswer}
                style={{
                  background: "linear-gradient(90deg, #56FFA4, #59BC86)",
                }}
              >
                <span
                  dangerouslySetInnerHTML={{ __html: item.correctAnswer }}
                />
              </button>
            </ButtonWrapper>
          </div>
        </Wrapper>
      ))}
    </Flex>
  );
};

export default UserAnswerCard;
