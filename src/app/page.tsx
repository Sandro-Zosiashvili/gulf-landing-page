import styles from "./page.module.css";
import HeroSection from "@/app/components/HeroSection/Herosection";
import PricingSection from "@/app/components/PricingSection/Pricingsection";
import ServiceSection from "@/app/components/ServiceSection/Servicesection";
import AdvantagesSection from "@/app/components/AdvantagesSection/AdvantagesSection";
import NewsSection from "@/app/components/NewsSection/NewsSection";
import BusinessCardSection from "@/app/components/BusinessCardSection/BusinessCardSection";
import FooterSection from "@/app/components/FooterSection/FooterSection";

export default async function Home() {
    return (
        <div className={styles.page}>
            <HeroSection/>
            <PricingSection/>
            <ServiceSection/>
            <AdvantagesSection/>
            <NewsSection/>
            <BusinessCardSection/>
            <FooterSection/>
        </div>
    );
}
