import styles from './Herosection.module.scss';
import MySwiper, {MySwiperProps} from "@/app/components/Swiper/Swiper";
import Login from "@/app/components/Login/Login";
import {ApiFetch} from "@/app/api/ApiFetch";


const HeroSection = async () => {
    const banners = await ApiFetch('banners');

    return (
        <section className={styles.firstLayout}>
            <div className={styles.swiper}>
                <MySwiper banners={banners}/>
            </div>
            <div className={styles.login}>
                <Login/>

            </div>
        </section>
    )
}

export default HeroSection;
