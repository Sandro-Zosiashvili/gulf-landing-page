import styles from './Pricingsection.module.scss';
import PricesHeader from "@/app/components/PricesHeader/Pricesheader";
import PriceCard from "@/app/components/PriceCard/Pricecard";

const PricingSection = () => {
    return (
        <section className={styles.container}>
            <PricesHeader/>
            <PriceCard />
        </section>
    )
}

export default PricingSection;
