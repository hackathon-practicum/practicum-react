import {FreeMode, Navigation, Pagination } from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import React from "react";
import CommentsCard from "./CommentsCard";
import commentsPic from "../images/comments_pic.png";
import commentsPic2 from "../images/comments_pic2.png";
import commentsPic3 from "../images/comments_pic3.png";
import commentsPic4 from "../images/comments_pic4.png";

export default function Comments() {
    return (
        <section className="comments section content__section">
            <h2 className="section__title section__title_type_white">Отзывы команды</h2>
            <div className="comments__cards-container">
                <Swiper
                    slidesPerView={"auto"}
                    spaceBetween={20}
                    freeMode={true}
                    modules={[FreeMode, Navigation, Pagination]}
                    navigation={true}
                    pagination={{
                        enabled: true,
                        dynamicBullets: true
                    }}
                    loop={false}
                    className="my-swiper"
                >
                    <SwiperSlide>
                        <CommentsCard
                            image={commentsPic}
                            class={'comments__card_type_visible'}
                            title={'Анна Симакова'}
                            subtitle={'дизайн-ревьюер'}
                            text={'Выбрала работу в Я.Практикуме, чтобы делиться знаниями и наслаждаться рабочим процессом.'}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CommentsCard
                            image={commentsPic2}
                            class={'comments__card_type_visible'}
                            title={'Сергей Игнатьев'}
                            subtitle={'код-ревьюер'}
                            text={'Выбрал работу в Я.Практикуме, чтобы получить новый опыт и иметь дополнительный заработок.'}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CommentsCard
                            image={commentsPic3}
                            class={'comments__card_type_visible'}
                            title={'Андрей Иванов'}
                            subtitle={'код-ревьюер'}
                            text={'Выбрал работу в Я.Практикуме, чтобы получить новый опыт и иметь дополнительный заработок.'}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CommentsCard
                            image={commentsPic4}
                            class={'comments__card_type_visible'}
                            title={'Даниил Богданчиков'}
                            subtitle={'наставник разработки'}
                            text={'Выбрал работу в Я.Практикуме, чтобы реализовать себя как профессионал.'}
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}
