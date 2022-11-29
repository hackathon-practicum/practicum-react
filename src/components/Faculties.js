import React from "react";
import FacultiesCard from "./FacultiesCard";
import {FreeMode, Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

export default function Faculties() {
    return (
        <section className="faculties section content__section">
            <h2 className="section__title">Чему мы учим</h2>
            <div className="faculties__cards-container">
                <Swiper
                    slidesPerView={"auto"}
                    spaceBetween={30}
                    freeMode={true}
                    modules={[FreeMode, Navigation]}
                    navigation={true}
                    loop={true}
                    className="my-swiper"
                >
                    <SwiperSlide>
                        <FacultiesCard
                            subtitle={'Программирование'}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <FacultiesCard
                            subtitle={'Дизайн'}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <FacultiesCard
                            subtitle={'Маркетинг'}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <FacultiesCard
                            subtitle={'Менеджмент'}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <FacultiesCard
                            subtitle={'Аналитика'}
                        />
                    </SwiperSlide>
                </Swiper>

            </div>
        </section>
    )
}