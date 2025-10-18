"use client";
import React, {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import styles from "./AdvantageMobileSwiper.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {Navigation, Pagination, Autoplay} from "swiper/modules";
import Image from "next/image";
import Button from "@/app/components/Button/Button";

interface Advantage {
    id: number;
    title: string;
    description: string;
}

export interface AdvantagesData {
    advantages: Advantage[];
}

const AdvantageMobileSwiper = ({advantages}: AdvantagesData) => {


    return (
        <div className={styles.swiperWrapper}>
            <Swiper modules={[Navigation]}
                    spaceBetween={24}
                    slidesPerView={1}
                    breakpoints={{ 0: { slidesOffsetAfter: 50,},}}
                    autoplay={{delay: 7000, disableOnInteraction: false,}}
                    pagination={{clickable: true,}}
                    className={styles.mySwiper}
            >
                {
                    advantages.map((item: Advantage, index: number) => (
                        <SwiperSlide className={styles.slideContent}>
                            <div className={styles.wrapper}>
                                <div className={styles.header}>
                                    {index + 1}
                                </div>
                                <div className={styles.title}>
                                    {item.title}
                                </div>
                                <div className={styles.description}>
                                    {item.description}
                                </div>

                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default AdvantageMobileSwiper;
