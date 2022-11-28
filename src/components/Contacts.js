import { NavLink } from 'react-router-dom';
import arrowRight from '../images/arrowRight.png';

export default function Contacts() {
  return (
    <section className="contacts section content__section">
      <div className='contacts__info'>
        <h2 className="contacts__title">Останемся на связи?</h2>
        <p className="contacts__text">Подпишитесь на нас в соцсетях, у нас там много интересного.</p>
      </div>
      <div className="contacts__animation">
        <img src={arrowRight} alt="Стрелка направление" className='contacts__arrow'/>
        <img src={arrowRight} alt="Стрелка направление" className='contacts__arrow'/>
        <img src={arrowRight} alt="Стрелка направление" className='contacts__arrow'/>
        <img src={arrowRight} alt="Стрелка направление" className='contacts__arrow'/>
        <img src={arrowRight} alt="Стрелка направление" className='contacts__arrow'/>
      </div>
      <nav className='contacts__nav'>
        <NavLink to="#" className='contacts__link contacts__link_journal'>Журнал</NavLink>
        <NavLink to="#" className='contacts__link contacts__link_vk'/>
        <NavLink to="#" className='contacts__link contacts__link_telegram'/>
      </nav>
    </section>
  )
}
