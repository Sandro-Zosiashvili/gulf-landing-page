import styles from './Servicesection.module.scss'
import ServiceSwiper from "@/app/components/ServiceSwiper/Serviceswiper";
import {ApiFetch} from "@/app/api/ApiFetch";

const ServiceSection = async () => {
    const services = await ApiFetch("services");

    return (
        <section className={styles.container}>
            <div className={styles.wrapper}>
                <ServiceSwiper service={services}/>
            </div>
        </section>
    )
}

export default ServiceSection;
