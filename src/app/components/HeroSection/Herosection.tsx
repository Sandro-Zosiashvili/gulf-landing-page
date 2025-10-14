



import styles from './Herosection.module.scss';
import MySwiper from "@/app/components/Swiper/Swiper";
import Login from "@/app/components/Login/Login";

const HeroSection = () => {


    return (
        <div className={styles.firstLayout}>
            <div className={styles.swiper}>
                <MySwiper />
            </div>
            <div>
                <Login/>
            </div>
        </div>
    )
}

export default HeroSection;