import styles from "./page.module.css";
import Herosection from "@/app/components/HeroSection/Herosection";
import PricingSection from "@/app/components/PricingSection/Pricingsection";
import ServiceSection from "@/app/components/ServiceSection/Servicesection";
import AdvantagesSection from "@/app/components/AdvantagesSection/AdvantagesSection";
import Newssection from "@/app/components/NewsSection/Newssection";

export default async function Home() {
    return (
        <div className={styles.page}>
            <Herosection/>
            <PricingSection/>
            <ServiceSection/>
            <AdvantagesSection/>
            <Newssection />
        </div>
    );
}
