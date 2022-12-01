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
            <h2 className="section__title section__title_type_white comments__section-title">Отзывы команды</h2>
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
                            title={'Сергей Игнатьев'}
                            subtitle={'код-ревьюер'}
                            text={'Выбрал Практикум, \n' +
                                'чтобы получить новый опыт и иметь дополнительный заработок.'}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CommentsCard
                            image={commentsPic2}
                            class={'comments__card_type_visible'}
                            title={'Данил Богданов'}
                            subtitle={'наставник разработки'}
                            text={'Выбрал Практикум, чтобы \n' + 'реализовать себя как профессионал и делиться опытом.'}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CommentsCard
                            image={commentsPic3}
                            class={'comments__card_type_visible'}
                            title={'Дмитрий Янов'}
                            subtitle={'наставник разработки'}
                            text={'Выбрал Практикум, \n' +
                                'чтобы получить новый опыт и иметь дополнительный заработок.'}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CommentsCard
                            image={commentsPic4}
                            class={'comments__card_type_visible'}
                            title={'Анна Симакова'}
                            subtitle={'дизайн-ревьюер'}
                            text={'Выбрала Практикум,\n' +
                                'чтобы делиться знаниями и\n' + 'наслаждаться этим процессом.'}
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}
