import React from "react";

export default function Popup(props) {
    const isOpen = props.isOpen ? 'popup_opened' : '';
    return (
        <div onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
                props.onClose()
            }
        }} className={`popup ${isOpen}`}>
            <button onMouseDown={props.onClose} className="popup__close-button" type="button"></button>
            <div className="popup__container">
                <h2 className="section__title popup__heading">Хочу стать наставником на курсе <br/> «Мидл-фронтенд разработчик»</h2>
                <form className="popup__form">
                    <fieldset className="popup__contacts">
                        <label className="section__text">ФИО</label>
                        <input className="popup__input" type="text" id="name"
                               name="name"
                               minLength="2" maxLength="100"
                               placeholder="Алексеев Сергей Дмитрович" required/>

                        <label className="section__text">Почта</label>
                        <input className="popup__input" type="email" id="email"
                               name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                               minLength="2" maxLength="50"
                               placeholder="E-mail" required/>

                        <label className="section__text">Телеграм или телефон</label>
                        <input className="popup__input" type="tel" id="phone"
                               name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                               minLength="2" maxLength="50"
                               placeholder="8 (900) 000-00-00" required/>
                    </fieldset>
                    <div className="popup__field">
                        <label className="section__text">Перечислите набор технологий, которыми вы владеете <br /> и уровень владения каждой</label>
                        <textarea id="stack" name="stack" className="popup__input popup__input_type_stack"
                                  placeholder="Введите текст" aria-label="stack"></textarea>
                    </div>
                    <div className="popup__field">
                        <label className="section__text">Ссылка на резюме (пожалуйста, проверьте, что вы <br /> открыли доступ к документу)
                        </label>
                        <input className="popup__input" type="url" id="resume"
                               name="resume"
                               minLength="2" maxLength="1000"
                               placeholder="Ссылка на резюме" required/>
                    </div>
                    <div className="popup__field">
                        <label className="section__text">Пожалуйста, добавьте ссылки на ваши блоги, <br /> образовательные курсы, портфолио (если есть)</label>
                        <input className="popup__input" type="url" id="portfolio"
                               name="portfolio"
                               minLength="2" maxLength="1000"
                               placeholder="Ссылка на портфолио"/>
                    </div>
                    <div className="popup__checkbox-container">
                        <input className="popup__checkbox" type="checkbox" id="check" name="check" />
                        <label htmlFor="scales">Я даю согласие АНО ДПО «ШАД» и ООО «ЯНДЕКС» на обработку <br /> указанных данных для целей рассмотрения анкеты и обратной связи <br /> по ней.</label>
                    </div>
                    <button onMouseDown={props.onClose} type="submit" className="button-cta">Отправить</button>
                </form>
            </div>
        </div>
    )
}