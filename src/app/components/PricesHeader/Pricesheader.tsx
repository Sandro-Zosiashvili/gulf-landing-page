import styles from './Pricesheader.module.scss'
import Button from "@/app/components/Button/Button";


const PricesHeader = () => {


    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                ფასები
            </h2>
            <div className={styles.button}>
                <Button title={"არქივი"} mode={"withIcon"} iconSrc={'./icons/right-svg-prices.svg'}/>
            </div>
        </div>
    )
}


export default PricesHeader;