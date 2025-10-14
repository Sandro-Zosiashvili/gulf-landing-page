import Image from "next/image";
import styles from "./page.module.css";
import Menu from "@/app/components/Menu/Menu";
import Logo from "@/app/components/Logo/Logo";
import Header from "@/app/components/Header/Header";

import Swiper from 'swiper';
import MySwiper from "@/app/components/Swiper/Swiper";
import Login from "@/app/components/Login/Login";
import Herosection from "@/app/components/HeroSection/Herosection";
import Button from "@/app/components/Button/Button";
import PricingSection from "@/app/components/PricingSection/Pricingsection";


export default function Home() {
    return (
        <div className={styles.page}>
            <Herosection/>
            <PricingSection/>
        </div>
    );
}
