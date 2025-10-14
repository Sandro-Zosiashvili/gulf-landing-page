import styles from './Pricecard.module.scss'

interface Item {
    title: string;
    price: string;
}

const PriceCard = () => {

    const data = [
        {
            title: "G-Force სუპერი",
            price: "3.74₾"
        }, {
            title: "G-Force პრემიუმი",
            price: "3.74₾"
        }, {
            title: "G-Force რეგულარი",
            price: "3.74₾"
        }, {
            title: "ევრო რეგულარი",
            price: "3.74₾"
        }, {
            title: "G-Force ევრო დიზელი",
            price: "3.74₾"
        },
        {
            title: "ევრო დიზელი",
            price: "3.74₾"
        }, {
            title: "გაზი",
            price: "3.74₾"
        },
    ]


    return (
        <div className={styles.container}>
            {
                data.map((item: Item, index: number) => (
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