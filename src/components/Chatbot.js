import { useEffect, useState } from "react";
import { quizData } from "../utils/constants";
import ChatBotWindow from "./ChatBotWindow";

export default function Chatbot() {
  const [answerUser, setAnswerUser] = useState("");
  const [counterQuestion, setCounterQuestion] = useState(0);
  const [questionAdmin, setQuestionAdmin] = useState('');
  const [answerOptions, setAnswerOptions] = useState([]);
  const [mentorCounter, setMentorCounter] = useState(0);
  const [reviewerCounter, setReviewerCounter] = useState(0);
  const [recommendation, setRecommendation] = useState("");

  const isMentor = mentorCounter > reviewerCounter;
  function handleClickAnswer (e) {
    setAnswerOptions([]);
    setAnswerUser(e.target.textContent);
    if(answerOptions.indexOf(e.target.textContent)===0) {
      setReviewerCounter(reviewerCounter+1)
    } else if (answerOptions.indexOf(e.target.textContent)===1){
      setMentorCounter(mentorCounter+1);
    }
    setCounterQuestion(counterQuestion+1);
  }

  useEffect(()=>{
    setQuestionAdmin(quizData[counterQuestion]?.question);
    for (let key in quizData[counterQuestion]?.answers) {
      const objValues = Object.values(quizData[counterQuestion]?.answers);
      setAnswerOptions(answerOptions.concat(objValues));
    }

    if (counterQuestion+1 === quizData.length) {
      if (isMentor) {
        for (let key in quizData[counterQuestion]?.mentor) {
          setQuestionAdmin(quizData[counterQuestion].mentor.question);
          setRecommendation(answerOptions.concat(Object.values(quizData[counterQuestion].mentor.recommendation)));
        }
      } else {
        for (let key in quizData[counterQuestion]?.reviewer) {
          setQuestionAdmin(quizData[counterQuestion].reviewer.question);
          setRecommendation(answerOptions.concat(Object.values(quizData[counterQuestion].reviewer.recommendation)));
        }
      }

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
        recommendationJob={recommendation}
        isMentorOrReviewer = {isMentor}
      />
    </section>
  );
}
