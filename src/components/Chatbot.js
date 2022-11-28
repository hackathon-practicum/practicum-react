export default function Chatbot() {
  return (
    <section className="section section-chatbot">
      <h2 className="section__title section-chatbot__title">Какая роль вам больше подходит?</h2>
      <div className="section-chatbot__window">
        <div className="section-chatbot__admin-wrapper">
          <h3 className="section-chatbot__admin">Практикум</h3>
          <p className="section-chatbot__admin-question">Привет! Я задам несколько вопросов, чтобы помочь тебе определиться, какая роль будет ближе, наставника или ревьюера.</p>
        </div>
        <div className="section-chatbot__user-wrapper">
          <h3 className="section-chatbot__user">Гость</h3>
          <p className="section-chatbot__user-answer">
            Начинаем
          </p>
        </div>
      </div>
    </section>
  )
}
