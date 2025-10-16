import styles from './Pricecard.module.scss'
import {ApiFetch} from "@/app/logics/ApiFetch";

interface Item {
    id: number;
    title: string;
    price: string;
}

const PriceCard = async () => {
    const prices = await ApiFetch('price');


    return (
        <div className={styles.container}>
            {
                prices.map((item: Item, index: number) => (
                    <div className={index == 0 ? styles.priceCardNoneBorder : styles.priceCard} key={index}>
                        <div className={styles.priceTitle}>
                            {item.title}
                        </div>
                        <div className={styles.price}>
                            {item.price}
                        </div>

                    </div>
                ))
            }
        </div>
    )
}

export default PriceCard;