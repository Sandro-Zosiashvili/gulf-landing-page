"use client";
import React, {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";

// სტილები
import styles from "./swiper.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// მოდულები
import {Navigation, Pagination, Autoplay} from "swiper/modules";
import Image from "next/image";
import Button from "@/app/components/Button/Button";

interface Item {
    title: string;
}

const MySwiper = () => {
    const [currentSlide, setCurrentSlide] = useState(1);
    const totalSlides = 4;
    const [isLastSlide, setIsLastSlide] = useState(false);


    const data = [
        {
            title: "დაიბრუნე ქეშბექი ქულების სახით"
        },
        {
            title: "ბიზნეს ბარათის და ჯიპიეს სისტემის ინტეგრაცია"
        }, {
            title: "ჩიპის სისტემა"
        }, {
            title: "მობილური სადგურისა და საბარათე სისტემის ინტეგრაცია"
        },
    ]


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
                pagination={{
                    clickable: true,
                }}
                navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                }}
                onSlideChange={(swiper) => {
                    setCurrentSlide(swiper.realIndex + 1)
                    setIsLastSlide(swiper.realIndex === swiper.slides.length - 1);

                }}
                className={styles.mySwiper}
            >
                {
                    data.map((item: Item) => (

                        <SwiperSlide className={styles.slideContent}
                                     style={{backgroundImage: `url("https://imagedelivery.net/d_EE26O5eWcJDRYn-qMBOg/2a9b05c3-8939-4712-ef9b-a6c720b9c200/fit=scale-down,width=1920")`}}>
                            <div className={styles.contentWrapper}>
                                <div className={styles.counter}>
                                    <span className={styles.currentSlide}>{currentSlide}</span>
                                    <span>/</span>
                                    <span>{totalSlides}</span>
                                </div>
                                <div className={styles.title}>
                                    {item.title}
                                </div>
                                <div className={styles.button}>
                                    <Button title={"გაიგე მეტი"} mode={"light"}/>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
            <div className={styles.rightPagination}>
                <div className="custom-prev">
                    <Image src={'./icons/prev.svg'} width={11} height={18} alt={'Previous'}/>
                </div>
                <div className="custom-next"  >
                    <Image src={'./icons/next.svg'} width={11} height={18} alt={'Previous'}/>
                </div>
            </div>
        </div>
    );
};

export default MySwiper;
