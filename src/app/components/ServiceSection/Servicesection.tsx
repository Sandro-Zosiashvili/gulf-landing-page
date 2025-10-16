import styles from './Servicesection.module.scss'
import ServiceSwiper from "@/app/components/ServiceSwiper/Serviceswiper";
import {ApiFetch} from "@/app/logics/ApiFetch";


const ServiceSection = async () => {
    const services = await ApiFetch("services");

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <ServiceSwiper service={services}/>
            </div>
        </div>
    )
}


export default ServiceSection;