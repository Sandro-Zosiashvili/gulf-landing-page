import styles from './Servicesection.module.scss'
import PricesHeader from "@/app/components/PricesHeader/Pricesheader";
import ServiceSwiper from "@/app/components/ServiceSwiper/Serviceswiper";


const ServiceSection = () => {


    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <ServiceSwiper/>

            </div>

        </div>
    )
}


export default ServiceSection;