import { useContext } from "react";
import { UserAnswersContext } from "../context/UserAnswersProvider";
import { ButtonWrapper, Wrapper, Flex } from "./UserAnswerCard.styles";
import { useRouter } from "next/router";

const UserAnswerCard = () => {
    const router = useRouter();
    const { userAnswers } = useContext(UserAnswersContext);

    const handleGoBack = () => {
      router.back(); // Bir önceki sayfaya yönlendirir
    };

    console.log(userAnswers);

  return (
    <div className="correctAnswer">
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
      <button className="show" onClick={handleGoBack}>
        Restart
      </button>
    </div>
  );
};

export default UserAnswerCard;
