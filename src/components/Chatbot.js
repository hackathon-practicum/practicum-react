import practicumAvatar from "../images/practicumAvatar.svg";
export default function Chatbot() {
  return (
    <section className="section section-chatbot">
      <h2 className="section__title section-chatbot__title">
        Какая роль вам больше подходит?
      </h2>
      <div className="section-chatbot__window">
        <div className="section-chatbot__admin-wrapper">
          <img
            src={practicumAvatar}
            alt="Аватар Яндекс Практикум"
            className="section-chatbot__admin-avatar"
          />
          <h3 className="section-chatbot__admin">Практикум</h3>
          <p className="section-chatbot__admin-question">
            Привет! Я задам несколько вопросов, чтобы помочь тебе определиться,
            какая роль будет ближе, наставника или ревьюера.
          </p>
        </div>
        <div className="section-chatbot__answer-options">
          <button type="button" className="section-chatbot__button">
            Начинаем
          </button>
          {/* <form className="section-chatbot__list-answers">
            <input type="radio" name="answer" value="a3" />
            <label for="answer">Тут вопрос1</label>
            <input type="radio" name="answer2" value="a3" />
            <label for="answer2">Тут вопрос2</label>
          </form> */}
        </div>
        <div className="section-chatbot__user-wrapper">
          <img
            src={practicumAvatar}
            alt="Аватар пользователя"
            className="section-chatbot__user-avatar"
          />
          <h3 className="section-chatbot__user">Гость</h3>
          <p className="section-chatbot__user-answer">Начинаем</p>
        </div>
      </div>
    </section>
  );
}
