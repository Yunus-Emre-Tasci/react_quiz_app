import Head from "next/head";
import UserAnswerCard from "@/components/UserAnswerCarddeneme2";

const Answers = () => {

  return (
    <>
      <Head>
        <title>Answers</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="userAnswer">
        <UserAnswerCard/>
      </div>
    </>
  );
};

export default Answers;
