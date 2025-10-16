import styles from './Newssection.module.scss'
import NewsSwiper from "@/app/components/NewsSwiper/NewsSwiper";
import {ApiFetch} from "@/app/api/ApiFetch";

const Newssection = async () => {
    const news = await ApiFetch("news")

    return (
        <section className={styles.container}>
            <NewsSwiper news={news}/>
        </section>
    )
}

export default Newssection;
