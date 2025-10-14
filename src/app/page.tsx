import Image from "next/image";
import styles from "./page.module.css";
import Menu from "@/app/components/Menu/Menu";
import Logo from "@/app/components/Logo/Logo";
import Header from "@/app/components/Header/Header";

import Swiper from 'swiper';
import MySwiper from "@/app/components/Swiper/Swiper";
import Login from "@/app/components/Login/Login";


export default function Home() {
    return (
        <div className={styles.page}>
            <Header/>
            <Menu/>
            <div className={styles.firstLayout}>
                <div className={styles.swiper}>
                    <MySwiper />
                </div>
                <Login/>
            </div>

        </div>
    );
}
