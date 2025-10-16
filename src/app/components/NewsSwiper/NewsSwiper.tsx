"use client";
import React, {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {Navigation, Pagination, Autoplay} from "swiper/modules";
import Image from "next/image";
import styles from "./NewsSwiper.module.scss";
import Button from "@/app/components/Button/Button";

interface News {
    id: number;
    title: string;
    image: string;
    description: string;
    date: string;
}

export interface NewsSwiper {
    news: News[];
}

const NewsSwiper = ({news}: NewsSwiper) => {
    const [isLastSlide, setIsLastSlide] = useState(false);


    return (
        <div className={styles.swiperWrapper}>
            <div className={styles.container}>
                <div className={styles.title}>
                    სიახლეები
                </div>
                <div className={styles.rightPagination}>
                    <Button mode={"withIcon"} iconSrc={'./icons/icons8-menu-50.png'} title={"სია"}/>
                    <div className={styles.forFlex}>
                        <div className="custom-prev-two">
                            <Image src={'./icons/prev.svg'} width={13} height={20} alt={'Previous'}/>
                        </div>
                        <div className="custom-next-two">
                            <Image src={'./icons/next.svg'} width={13} height={20} alt={'Previous'}/>
                        </div>
                    </div>

                </div>
            </div>
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={24}
                slidesPerView={2}
                autoplay={{
                    delay: 7000,
                    disableOnInteraction: false,
                }}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={{
                    nextEl: ".custom-next-two",
                    prevEl: ".custom-prev-two",
                }}
                onSlideChange={(swiper) => {
                    setIsLastSlide(swiper.realIndex === swiper.slides.length - 1);

                }}
                className={styles.mySwiper}
            >
                {
                    news.map((item: News) => (

                        <SwiperSlide className={styles.slideContent}>
                            <div className={styles.wrapper}>
                                <div className={styles.cover}>
                                    <img src={`${item.image}`} style={{
                                        width: "13.61111111111111vw",
                                        height: "17.01388888888889vw",
                                        objectFit: "cover",
                                        borderRadius: "1.08333333333333vw",
                                    }} alt="image"/>
                                </div>
                                <div className={styles.content}>
                                    <p className={styles.date}>{item.date}</p>
                                    <p className={styles.titleSecond}>{item.title}</p>
                                    <p className={styles.description}>{item.description}</p>
                                    <div className={styles.button}>
                                        <Button mode="more" title={"იხილე მეტი"} iconSrc={"./icons/Vector.svg"}/>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div>
    );
};

export default NewsSwiper;
