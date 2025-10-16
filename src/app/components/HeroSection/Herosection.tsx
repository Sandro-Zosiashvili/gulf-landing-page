



import styles from './Herosection.module.scss';
import MySwiper, {MySwiperProps} from "@/app/components/Swiper/Swiper";
import Login from "@/app/components/Login/Login";
import {ApIfetch} from "@/app/logics/APIfetch";



const HeroSection = async () => {
    const banners = await ApIfetch('banners');

    return (
        <div className={styles.firstLayout}>
            <div className={styles.swiper}>
                <MySwiper  banners={banners}/>
            </div>
            <div>
                <Login/>
            </div>
        </div>
    )
}

export default HeroSection;