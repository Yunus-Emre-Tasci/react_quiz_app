import styled from "styled-components";

export const Flex=styled.div`
display: flex;
flex-wrap: wrap;
gap: 10px;
justify-content: center;
align-items: center;
padding: 40px 0;
height: 100%;
/* min-height: 100vh; */
`

export const Wrapper = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 /* align-items: center; */
  height: 300px;
  width: 400px;
  background: #ebfeff;
  border-radius: 10px;
  border: 2px solid #0085a3;
  padding: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;

  p {
    font-size: 1rem;
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;

  :hover {
    opacity: 0.8;
  }

  button {
    cursor: pointer;
    user-select: none;
    font-size: 0.8rem;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    background: ${({ correct }) =>
      correct
        ? "linear-gradient(90deg, #56FFA4, #59BC86)"
        : "linear-gradient(90deg, #FF5656, #C16868)"};
    border: 3px solid #ffffff;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color: #fff;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
  }
`;
