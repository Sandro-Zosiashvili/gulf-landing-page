import styles from "./page.module.css";
import Herosection from "@/app/components/HeroSection/Herosection";
import PricingSection from "@/app/components/PricingSection/Pricingsection";
import ServiceSection from "@/app/components/ServiceSection/Servicesection";
import AdvantagesSection from "@/app/components/AdvantagesSection/AdvantagesSection";


export default function Home() {
    return (
        <div className={styles.page}>
            <AdvantagesSection />
            <Herosection/>
            <PricingSection/>
            <ServiceSection/>

        </div>
    );
}
