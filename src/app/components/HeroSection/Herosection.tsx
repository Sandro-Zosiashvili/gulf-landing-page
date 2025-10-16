



import styles from './Herosection.module.scss';
import MySwiper, {MySwiperProps} from "@/app/components/Swiper/Swiper";
import Login from "@/app/components/Login/Login";
import {ApiFetch} from "@/app/logics/ApiFetch";



const HeroSection = async () => {
    const banners = await ApiFetch('banners');

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