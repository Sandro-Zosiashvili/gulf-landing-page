"use client"
import styles from './Advantagessection.module.scss';
import AdvantagesItem from "@/app/components/AdvantagesItem/AdvantagesItem";

interface Item {
    title: string;
    description: string;
}

const AdvantagesSection = () => {
    const data: Item[] = [{
        title: " საწვავის ხარჯვის შემცირება",
        description: "Gulf card არის კორპორატიული ბარათი, საწვავის ტალონებით შესყიდვის თანამედროვე შემცვლელი."
    }, {
        title: " საწვავის ხარჯვის შემცირება",
        description: "Gulf card არის კორპორატიული ბარათი, საწვავის ტალონებით შესყიდვის თანამედროვე შემცვლელი."
    }, {
        title: " საწვავის ხარჯვის შემცირება",
        description: "Gulf card არის კორპორატიული ბარათი, საწვავის ტალონებით შესყიდვის თანამედროვე შემცვლელი."
    }, {
        title: " საწვავის ხარჯვის შემცირება",
        description: "Gulf card არის კორპორატიული ბარათი, საწვავის ტალონებით შესყიდვის თანამედროვე შემცვლელი."
    },]
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.row}>
                    {data.slice(0, 2).map((item, index) => (
                        <AdvantagesItem key={index} number={index + 1} title={item.title} description={item.description}/>
                    ))}
                </div>

                <div className={styles.row}>
                    {data.slice(2, 4).map((item, index) => (
                        <AdvantagesItem key={index + 2} number={index + 3} title={item.title}
                                        description={item.description}/>
                    ))}
                </div>

            </div>

        </div>
    );
};

export default AdvantagesSection;
