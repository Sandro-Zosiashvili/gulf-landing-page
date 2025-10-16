import styles from './Pricecard.module.scss'
import {ApiFetch} from "@/app/api/ApiFetch";

interface Item {
    id: number;
    title: string;
    price: string;
}

const PriceCard = async () => {
    const prices = await ApiFetch('price');

    return (
        <section className={styles.container}>
            {prices.map((item: Item, index: number) => (
                <article className={index === 0 ? styles.priceCardNoneBorder : styles.priceCard} key={index}>
                    <h3 className={styles.priceTitle}>{item.title}</h3>
                    <p className={styles.price}>{item.price}</p>
                </article>
            ))}
        </section>
    )
}

export default PriceCard;
