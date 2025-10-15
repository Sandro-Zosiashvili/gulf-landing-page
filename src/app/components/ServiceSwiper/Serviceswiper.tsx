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

interface Item {
    title: string;
    description: string;
}

const ServiceSwiper = () => {
    const totalSlides = 4;
    const [isLastSlide, setIsLastSlide] = useState(false);


    const data = [
        {
            title: "Gulf club - ქულების დაგროვების სისტემა",
            description: "Gulf Club ის სახით კომპანია გალფი თავის მომხმარებელს მომენტალური ფასდაკლებისა და ქულების დაგროვების ბარათს სთავაზობს."
        },
        {
            title: "Gulf store - ყველაფერი ერთ სივრცეში",
            description: "Gulf Store კომპანიის ახალი პროექტია, სადაც მომხმარებელი შეხვდება ყოველდღიური მოხმარების სხვადასხვა საგნებს."
        }, {
            title: "Gulf store - ყველაფერი ერთ სივრცეში",
            description: "Gulf Store კომპანიის ახალი პროექტია, სადაც მომხმარებელი შეხვდება ყოველდღიური მოხმარების სხვადასხვა საგნებს."
        }, {
            title: "საერთაშორისო ბარათები",
            description: "E100 და Aris Baltija-ს ბარათების გამოყენება მთელი საქართველლოს მასშტაბით"
        }, {
            title: "ტალონი",
            description: "მოქნილი სატალონე მომსახურება თქვენი ბიზნესისთვის"
        },

    ]


    return (
        <div className={styles.swiperWrapper}>
            <div className={styles.container}>
                <div className={styles.title}>
                    სერვისები
                </div>
                <div className={styles.rightPagination}>
                    <div className="custom-prev-two">
                        <Image src={'./icons/prev.svg'} width={13} height={20} alt={'Previous'}/>
                    </div>
                    <div className="custom-next-two">
                        <Image src={'./icons/next.svg'} width={13} height={20} alt={'Previous'}/>
                    </div>
                </div>
            </div>
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={24}
                slidesPerView={3}
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
                    data.map((item: Item) => (

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
                                    <p className={styles.contentTitle}>
                                        {item.title}
                                    </p>
                                    <p className={styles.contentDescription}>
                                        {item.description}
                                    </p>
                                </div>
                                <div>

                                </div>
                                <div>
                                </div>
                                <button className={styles.forMore}>
                                    <div>
                                        იხილე მეტი
                                    </div>
                                    <img src="./icons/Vector.svg"
                                         style={{
                                             width: '13px',
                                             height: '13px',
                                         }} alt="Vector"/>
                                </button>
                            </div>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div>
    );
};

export default ServiceSwiper;
