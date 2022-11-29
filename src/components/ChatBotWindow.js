import practicumAvatar from "../images/practicumAvatar.svg";

export default function ChatBotWindow({
  questionAdmin,
  counterQuestion,
  answerUser,
  answerOptions,
  handleClickAnswer,
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
        {counterQuestion > 0 && (
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
        <div className="section-chatbot__answer-options">
          {counterQuestion === 0 && (
            <button
              type="button"
              className="section-chatbot__button"
              onClick={handleClickAnswer}>
              Подобрать себе роль
            </button>
          )}
          {counterQuestion > 0 && (
            <ul className="section-chatbot__list-answers">
              {answerOptions.map((item, i) => {
                console.log(item);
                return (
                  <li onClick={handleClickAnswer} key={i}>
                    {item}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
