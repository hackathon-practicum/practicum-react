import { useEffect, useState } from "react";
import { quizData } from "../utils/constants";
import ChatBotWindow from "./ChatBotWindow";

export default function Chatbot() {
  const [answerUser, setAnswerUser] = useState("");
  const [counterQuestion, setCounterQuestion] = useState(0);
  const [questionAdmin, setQuestionAdmin] = useState('');
  const [answerOptions, setAnswerOptions] = useState([]);

  function handleClickAnswer (e) {
    setAnswerOptions([]);
    console.log(quizData.length, counterQuestion)
    setAnswerUser(e.target.textContent);
    setCounterQuestion(counterQuestion+1);
  }

  useEffect(()=>{
    setQuestionAdmin(quizData[counterQuestion]?.question);
    for (let key in quizData[counterQuestion]?.answers) {
      console.log(quizData[counterQuestion].answers[key])
      const objValues = Object.values(quizData[counterQuestion]?.answers);
      setAnswerOptions(answerOptions.concat(objValues));
    }
  },[counterQuestion])

  return (
    <section className="section section-chatbot">
      <h2 className="section__title section-chatbot__title">
        Какая роль вам больше подходит?
      </h2>
      <ChatBotWindow
        answerUser={answerUser}
        counterQuestion={counterQuestion}
        questionAdmin={questionAdmin}
        answerOptions={answerOptions}
        quizData={quizData}
        handleClickAnswer={handleClickAnswer}
      />
    </section>
  );
}
