import styles from './Servicesection.module.scss'
import ServiceSwiper from "@/app/components/ServiceSwiper/Serviceswiper";
import {ApIfetch} from "@/app/logics/APIfetch";


const ServiceSection = async () => {
    const services = await ApIfetch("services");

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <ServiceSwiper service={services}/>
            </div>
        </div>
    )
}


export default ServiceSection;