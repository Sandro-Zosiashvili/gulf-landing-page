import styles from './BusinessCardSection.module.scss'
import Button from "@/app/components/Button/Button";


const BusinessCardSection = () => {


    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h2 className={styles.title}>
                    გალფის ბიზნეს ბარათი თქვენი ბიზნესისთვის
                </h2>
                <p className={styles.description}>
                    Gulf card-ი არის კორპორატიული ბარათი,
                    საწვავის ტალონებით შესყიდვის თანამედროვე შემცვლელი,
                    რომელიცგაგიმარტივებთ ბიზნესის მართვას.
                </p>
                <div className={styles.button}>
                    <Button title={"ბარათის შეკვეთა"} mode={"dark"}/>

                </div>

            </div>

        </div>
    )
}


export default BusinessCardSection;