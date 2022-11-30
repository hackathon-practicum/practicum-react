import { NavLink } from 'react-router-dom';
import arrowRight from '../images/arrowRight.png';

export default function Roadmap() {

  return (
    <section className="section roadmap">
      <h2 className="section__title">Как стать экспертом?</h2>
      <div className="roadmap__content">
        <p className="roadmap__text">Выберите роль и заполните заявку</p>
        <img src={arrowRight} alt="Стрелка направление" className='roadmap__animation'/>
        <img src={arrowRight} alt="Стрелка направление" className='roadmap__animation'/>
        <p className="roadmap__text">Пройдите отбор и бесплатное обучение</p>
        <img src={arrowRight} alt="Стрелка направление" className='roadmap__animation'/>
        <img src={arrowRight} alt="Стрелка направление" className='roadmap__animation'/>
        <p className="roadmap__text">Начните делиться знаниями со студентами Яндекс Практикума</p>
      </div>
      <NavLink to="#" className="button-cta roadmap__button">Хочу делиться знаниями</NavLink>
    </section>
  )
}
