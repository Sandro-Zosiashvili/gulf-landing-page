"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import Button from "@/app/components/Button/Button";
import styles from "./swiper.module.scss";

interface Banner {
    id: number;
    title: string;
    image: string;
}

export interface MySwiperProps {
    banners: Banner[];
}

const MySwiper = ({ banners }: MySwiperProps) => {
    const [currentSlide, setCurrentSlide] = useState(1);

    return (
        <div className={styles.swiperWrapper}>
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={10}
                centeredSlides={true}
                autoplay={{
                    delay: 7000,
                    disableOnInteraction: false,
                }}
                navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                }}
                onSlideChange={(swiper) => {
                    setCurrentSlide(swiper.realIndex + 1);
                }}
                className={styles.mySwiper}
            >
                {banners.map((item: Banner) => (
                    <SwiperSlide
                        key={item.id}
                        className={styles.slideContent}
                        style={{ backgroundImage: `url(${item.image})` }}
                    >
                        <div className={styles.contentWrapper}>
                            <div className={styles.counter}>
                                <span className={styles.currentSlide}>{currentSlide}</span>
                                <span>/</span>
                                <span>{banners.length}</span>
                            </div>
                            <div className={styles.title}>{item.title}</div>
                            <div className={styles.button}>
                                <Button title={"გაიგე მეტი"} mode={"light"} />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className={styles.rightPagination}>
                <div className="custom-prev">
                    <Image src={'./icons/prev.svg'} width={11} height={18} alt={'Previous'} />
                </div>
                <div className="custom-next">
                    <Image src={'./icons/next.svg'} width={11} height={18} alt={'Next'} />
                </div>
            </div>
        </div>
    );
};

export default MySwiper;
