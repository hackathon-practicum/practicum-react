import React from "react";
import FacultiesCard from "./FacultiesCard";
import {FreeMode, Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
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
                    modules={[FreeMode, Navigation]}
                    navigation={true}
                    loop={false}
                    className="my-swiper"
                >
                    <SwiperSlide>
                        <FacultiesCard
                            image={facultiesPicIT}
                            subtitle={'Программирование'}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <FacultiesCard
                            image={facultiesPicDesign}
                            subtitle={'Дизайн'}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <FacultiesCard
                            image={facultiesPicMarketing}
                            subtitle={'Маркетинг'}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <FacultiesCard
                            image={facultiesPicManage}
                            subtitle={'Менеджмент'}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <FacultiesCard
                            image={facultiesPicAnalytics}
                            subtitle={'Аналитика'}
                        />
                    </SwiperSlide>
                </Swiper>

            </div>
        </section>
    )
}