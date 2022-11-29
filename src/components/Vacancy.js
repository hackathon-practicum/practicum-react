import React from "react";
import {NavLink} from "react-router-dom";
import arrow from "../images/arrow_back.svg";

export default function Vacancy() {
    return (
        <section className="vacancy section content__section">
            <div className="vacancy__wrapper">
                <NavLink to="#" className="vacancy__link"><img src={arrow} alt="#" className="vacancy__arrow"/>К списку вакансий</NavLink>
                <h2 className="section__title vacancy__title">Наставник на курс «Джуниор <br></br> фронтенд-разработчик»</h2>
                <h3 className="section__subtitle vacancy__subtitle">Вы нам подходите, если:</h3>
                <ul className="vacancy__list">
                    <li className="section__text vacancy__text">Имеете опыт работы программистом больше трех лет;</li>
                    <li className="section__text vacancy__text">Знаете HTML, CSS;</li>
                    <li className="section__text vacancy__text">Работали с JavaScript, React, TypeScript, Node.js;</li>
                    <li className="section__text vacancy__text">Готовы посвящать проекту от 8 до 12 часов в неделю. Удобное для вас время будем рады обсудить лично.</li>
                </ul>
                <h3 className="section__subtitle vacancy__subtitle">Я подхожу. Что вы можете предложить?</h3>
                <ul className="vacancy__list">
                    <li className="section__text vacancy__text">Работу в перспективной, социально значимой нише.</li>
                    <li className="section__text vacancy__text">Сдельное ежемесячное вознаграждение.</li>
                    <li className="section__text vacancy__text">Удаленную частичную занятость и возможность совмещать участие в проекте с основной нагрузкой.</li>
                    <li className="section__text vacancy__text">Увлекательный челлендж, который укрепит ваши лидерские качества.</li>
                    <li className="section__text vacancy__text">Площадку для передачи знаний и навыков.</li>
                    <li className="section__text vacancy__text">Возможность быть для начинающих разработчиков проводником в обучении и в мире профессии.</li>
                    <li className="section__text vacancy__text">Обмен опытом с нашей командой разработчиков, авторов, редакторов и методистов.</li>
                    <li className="section__text vacancy__text">Бесплатное обучение в Школе наставников Яндекс Практикума.</li>
                </ul>
                <div className="vacancy__button-wrapper">
                    <button type="button" className="button-cta">Хочу прокачаться в ревью кода</button>
                    <button type="button" className="button-cta button-cta_vacancy">Поделиться вакансией</button>
                </div>
            </div>
        </section>
    )
}