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
  isMentorOrReviewer,
}) {
  return (
    <div className="section-chatbot__window">
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
        {counterQuestion > 0  && counterQuestion + 1 !== quizData.length && (
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
              <h2 className="section-chatbox__recommendation-title">
                {recommendationJob[0]}
              </h2>
              <img
                src={arrowRight}
                alt="Стрелка направление"
                className="contacts__arrow section-chatbox__recommendation-arrow"
              />
              <p className="section-chatbox__recommendation-item">
                {"пункты рекомендации"}
              </p>
              <img src={recommendationJob[2]} alt="фотография ревьювера" />
            </div>
            <div className="section-chatbot__buttons-recomendation">
              <NavLink
                to={isMentorOrReviewer ? "#" : "#"}
                type="button"
                className="button-cta section-chatbot__button-cta">
                Показать открытые предложения
              </NavLink>
              <NavLink to="#" type="button" className="section-chatbot__button">
                {isMentorOrReviewer
                  ? "А что делает ревьювер?"
                  : "А что делает наставник?"}
              </NavLink>
            </div>
          </div>
        ) : (
          <div className="section-chatbot__answer-options">
            {counterQuestion === 0 && (
              <button
                type="button"
                className="section-chatbot__button"
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
