import React from "react";
import FacultiesCard from "./FacultiesCard";
import { FreeMode, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import facultiesPicIT from "../images/faculties_it.svg";
import facultiesPicDesign from "../images/faculties_design.svg";
import facultiesPicMarketing from "../images/faculties_marketing.svg";
import facultiesPicManage from "../images/faculties_manage.svg";
import facultiesPicAnalytics from "../images/faculties_analytics.svg";

export default function Faculties() {
  return (
    <section className="faculties section content__section">
      <h2 className="section__title section__title_type_white">Чему мы учим</h2>
      <div className="faculties__cards-container">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          freeMode={true}
          modules={[FreeMode, Navigation, Pagination]}
          navigation={true}
          pagination={{
            enabled: true,
            dynamicBullets: true,
          }}
          loop={false}
          className="my-swiper">
          <SwiperSlide>
            <FacultiesCard
              image={facultiesPicIT}
              subtitle={"Программирование"}
              text={
                "Направление для всех, кто хочет развиваться в сфере программирования вне зависимости от прошлого опыта. Учим разработке и тестированию в условиях, которые имитируют реальную работу: с проектами, спринтами и дедлайнами. Мы за честный взгляд на программирование: без клише и ложных ожиданий."
              }
              subtext={"Включает в себя 31 курс"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <FacultiesCard
              image={facultiesPicDesign}
              subtitle={"Дизайн"}
              text={
                "Направление подойдёт как новичкам, так и практикующим профессионалам — у нас обучаются дизайнеры, UX-писатели и UX-исследователи. Учим работать с композицией, цветом, типографикой, текстом, исследованиями так, чтобы приносить пользу и пользователям, и бизнесу."
              }
              subtext={"Включает в себя 5 курсов"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <FacultiesCard
              image={facultiesPicMarketing}
              subtitle={"Маркетинг"}
              text={
                "Направление для всех, кто хочет учиться маркетингу в интернете. На курсах мы учим запускать рекламу и управлять рекламными кампаниями. Знакомим с анализом бренда, рассказываем про seo-оптимизацию и email-маркетинг, обучаем на реальных примерах из бизнеса."
              }
              subtext={"Включает в себя 2 курса"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <FacultiesCard
              image={facultiesPicManage}
              subtitle={"Менеджмент"}
              text={
                "Направление для тех, кто начинает или продолжает свой путь в сфере управления — людьми, проектами, продуктами, ресурсами. В обучении мы используем проблемно-ориентированный подход, силу данных и научно обоснованные методики."
              }
              subtext={"Включает в себя 12 курсов"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <FacultiesCard
              image={facultiesPicAnalytics}
              subtitle={"Аналитика"}
              text={
                "Курсы по анализу данных подойдут всем, кому интересно работать с цифрами и аналитикой. В эту область входят несколько направлений: предобработка и анализ, Data Science и Data Engineering, хранение и управление данными. "
              }
              subtext={"Включает в себя 17 курсов"}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
