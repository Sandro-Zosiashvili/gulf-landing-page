import styles from './Newssection.module.scss'
import NewsSwiper from "@/app/components/NewsSwiper/NewsSwiper";
import {ApIfetch} from "@/app/logics/APIfetch";


const Newssection = async () => {
    const news = await ApIfetch("news")


    return (
        <div className={styles.container}>
            <NewsSwiper news={news}/>
        </div>
    )
}


export default Newssection
