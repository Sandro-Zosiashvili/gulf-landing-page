"use client";
import React, {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import styles from "./Serviceswiper.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {Navigation, Pagination, Autoplay} from "swiper/modules";
import Image from "next/image";
import Button from "@/app/components/Button/Button";

interface Services {
    title: string;
    description: string;
}

export interface ServicesData {
    service: Services[];
}

const ServiceSwiper = ({service}: ServicesData) => {
    // const [isLastSlide, setIsLastSlide] = useState(false);
// სვაიპერები ცოტა დიდები გამომივიდა მეტნაირად ვერ დავშალე კოდი
    return (
        <div className={styles.swiperWrapper}>
            <div className={styles.container}>
                <div className={styles.title}>სერვისები</div>
                <div className={styles.rightPagination}>
                    <div className="custom-prev-two">
                        <Image src={'./icons/prev.svg'} width={13} height={20} alt={'Previous'}/>
                    </div>
                    <div className="custom-next-two">
                        <Image src={'./icons/next.svg'} width={13} height={20} alt={'Previous'}/>
                    </div>
                </div>
            </div>
            <Swiper modules={[Navigation, Autoplay]}
                    spaceBetween={24}
                    slidesPerView={3}
                    autoplay={{delay: 7000, disableOnInteraction: false,}}
                    loop={true}
                    pagination={{clickable: true,}}
                    navigation={{
                        nextEl: ".custom-next-two",
                        prevEl: ".custom-prev-two",
                    }}
                    // onSlideChange={(swiper) => {
                    //     setIsLastSlide(swiper.realIndex === swiper.slides.length - 1);
                    // }}
                    className={styles.mySwiper}
            >
                {
                    service.map((item: Services) => (
                        <SwiperSlide className={styles.slideContent}>
                            <div className={styles.wrapper}>
                                <div className={styles.contentContainer}>
                                    <div className={styles.contentIcon}>
                                        <img src={'./icons/serviceIcon.svg'}
                                             style={{
                                                 width: '1.974vw',
                                                 height: '1.974vw',
                                             }} alt={'Service-icon'}/>
                                    </div>
                                </div>
                                <div className={styles.contentDescription}>
                                    <p className={styles.contentTitle}> {item.title}</p>
                                    <p className={styles.contentDescription}> {item.description}</p>
                                </div>
                                <div className={styles.buttonWrapper}>
                                    <Button mode="more" title={"იხილე მეტი"} iconSrc={"./icons/Vector.svg"}/>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default ServiceSwiper;
