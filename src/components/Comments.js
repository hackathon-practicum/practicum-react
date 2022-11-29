import {FreeMode, Navigation } from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import React from "react";
import CommentsCard from "./CommentsCard";

export default function Comments() {
    return (
        <section className="comments section content__section">
            <h2 className="section__title">Отзывы команды</h2>
            <div className="comments__cards-container">
                <Swiper
                    slidesPerView={"auto"}
                    spaceBetween={20}
                    freeMode={true}
                    modules={[FreeMode, Navigation]}
                    navigation={true}
                    loop={true}
                    className="my-swiper"
                >
                    <SwiperSlide>
                        <CommentsCard
                            title={'Андрей Иванов'}
                            subtitle={'код-ревьюер'}
                            text={'Выбрал работу в Я.Практикуме, чтобы получить новый опыт и иметь дополнительный заработок.'}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CommentsCard
                            title={'Андрей Иванов'}
                            subtitle={'код-ревьюер'}
                            text={'Выбрал работу в Я.Практикуме, чтобы получить новый опыт и иметь дополнительный заработок.'}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CommentsCard
                            title={'Андрей Иванов'}
                            subtitle={'код-ревьюер'}
                            text={'Выбрал работу в Я.Практикуме, чтобы получить новый опыт и иметь дополнительный заработок.'}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CommentsCard
                            title={'Андрей Иванов'}
                            subtitle={'код-ревьюер'}
                            text={'Выбрал работу в Я.Практикуме, чтобы получить новый опыт и иметь дополнительный заработок.'}
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}
