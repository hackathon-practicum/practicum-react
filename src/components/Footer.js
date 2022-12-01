import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__number">
        <p className="footer__number_phone">8-800-700-93-29</p>
        <p className="footer__number_text">Звонок по России бесплатный</p>
      </div>
      <p className="footer__copyright">© 2022 АНО ДПО «ШАД», ООО «Яндекс»</p>
      <nav className="footer__nav">
        <ul className="footer__list">
          <li><a href="/#faq" className="footer__link">Помощь</a></li>
          <li><a href="/#vacancy" className="footer__link">Вакансии</a></li>
          <li><a href="/#comments" className="footer__link">Отзывы</a></li>
          <li><a href="/#" className="footer__link">Лицензия</a></li>
          <li><a href="/#" className="footer__link">Правовая информация</a></li>
          <li><a href="/#contacts" className="footer__link">Для работодателей</a></li>
        </ul>
      </nav>
      <div className="footer__info">
        <p className="footer__paragraph">Информация на данной странице описывает возможные варианты получения дополнительного дохода в месяц (т.н. подработка). Не является предложением о работе. Размещенные объявления о потребности в тех или иных услугах не являются вакансиями.</p>
        <p className="footer__paragraph">Образовательные услуги оказываются АНО ДПО «ШАД». ШАД — это Школа анализа данных, основанная Яндексом и оказывающая образовательные услуги на основании Лицензии № 036 031 от 24 марта 2015 года.</p>
        <p className="footer__paragraph">Сертификат о прохождении обучения по программе дополнительного профессионального образования также выдается АНО ДПО «ШАД».</p>
      </div>
    </footer>
  )
}
