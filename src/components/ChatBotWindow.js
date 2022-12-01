import { NavLink } from "react-router-dom";
import practicumAvatar from "../images/practicumAvatar.svg";
import arrowRight from "../images/arrowRight.png";
import { quizData } from "../utils/constants";

export default function ChatBotWindow({
  questionAdmin,
  counterQuestion,
  answerUser,
  answerOptions,
  handleClickAnswer,
  recommendationJob,
  recommendationOptions,
  isMentorOrReviewer,
  hadleChangeTasks
  }) {

    const recommendationItem =
    recommendationOptions ? recommendationOptions.map((item, i) =>{
        return (
        <div className="section-chatbox__animation">
          <img
            src={arrowRight}
            alt="Стрелка направление"
            className="section-chatbox__recommendation-arrow"
          />
          <p className="section-chatbox__recommendation-item" key={i+item[1]}>{item}</p>
        </div>)
      }) : "";

  return (
    <div
      className= {counterQuestion > 0 ? "section-chatbot__window section-chatbot__window_active" : "section-chatbot__window"}
    >
      <div className="section-chatbot__template">
        <div className="section-chatbot__admin-wrapper">
          <img
            src={practicumAvatar}
            alt="Аватар Яндекс Практикум"
            className="section-chatbot__admin-avatar"
          />
          <h3 className="section-chatbot__admin">Практикум</h3>
          <p className="section-chatbot__admin-question">{questionAdmin}</p>
        </div>
        {counterQuestion > 0 && counterQuestion + 1 !== quizData.length && (
          <div className="section-chatbot__user-wrapper">
            <img
              src={practicumAvatar}
              alt="Аватар пользователя"
              className="section-chatbot__user-avatar"
            />
            <h3 className="section-chatbot__user">Гость</h3>
            <p className="section-chatbot__user-answer">{answerUser}</p>
          </div>
        )}

        {counterQuestion + 1 === quizData.length ? (
          <div className="section-chatbox__recommendation">
            <div className="section-chatbox__recommendation-info">
              <div className="section-chatbox__recommendation-text">
                <h2 className="section-chatbox__recommendation-title">
                  {recommendationJob[0]}
                </h2>
                {recommendationItem}
              </div>
              <img src={recommendationJob[2]} alt="фотография ревьювера" />
            </div>
            <div className="section-chatbot__buttons-recomendation">
              <NavLink
                to={isMentorOrReviewer ? "/vacancy" : "/vacancy"}
                type="button"
                className="button-cta section-chatbot__button-cta">
                Показать открытые предложения
              </NavLink>
              <button type="button" className="section-chatbot__button" onClick={hadleChangeTasks}>
                {isMentorOrReviewer
                  ? "А что делает ревьювер?"
                  : "А что делает наставник?"}
              </button>
            </div>
          </div>
        ) : (
          <div className="section-chatbot__answer-options">
            {counterQuestion === 0 && (
              <button
                type="button"
                className="button-cta section-chatbot__button-cta"
                onClick={handleClickAnswer}>
                {counterQuestion === 0 && "Подобрать себе роль"}
              </button>
            )}

            {counterQuestion > 0 && counterQuestion + 1 !== quizData.length && (
              <ul className="section-chatbot__list-answers">
                {answerOptions.map((item, i) => {
                  return (
                    <li
                      onClick={handleClickAnswer}
                      key={i}
                      className="section-chatbot__options-element">
                      {item}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
