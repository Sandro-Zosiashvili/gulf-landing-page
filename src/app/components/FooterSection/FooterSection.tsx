import styles from './FooterSection.module.scss'
import FooterSectionItem from "@/app/components/FooterSectionItem/FooterSectionItem";
import React from "react";
import UnderFooterSection from "@/app/components/UnderFooterSection/UnderFooterSection";


const FooterSection = () => {

    return (

        <footer className={styles.container}>
            <div className={styles.footerContainer}>
                <FooterSectionItem
                    title="მენიუ"
                    items={["Gulf card", "GPS technology", "სათაურის ადგილი", "კონტაქტი"]}
                />
                <FooterSectionItem
                    title="კომპანია"
                    items={["ჩვენ შესახებ", "სერვისები", "პარტნიორები", "კარიერა"]}
                />
                <FooterSectionItem
                    title="სოციალური ქსელები"
                    icon={true}
                />
                <FooterSectionItem
                    title="დაგვიკავშირდით"
                    items={["*0007", "gulf@info.ge"]}
                />
            </div>
            <div className={styles.MobileItems}>
                <FooterSectionItem
                    title="მენიუ"
                    items={["Gulf card", "GPS technology", "სათაურის ადგილი", "კონტაქტი"]}
                />
                <FooterSectionItem
                    title="კომპანია"
                    items={["ჩვენ შესახებ", "სერვისები", "პარტნიორები", "კარიერა"]}
                />
                <div className={styles.MobileItemsInfo}>
                    <div>gulf@info.ge</div>
                    <div>*0007</div>
                </div>
                <a className={styles.MobileItemsLinks}>
                    <img src={"/icons/fcVector.svg"}
                         style={{
                             width: "5vw",
                             height: "5vw",
                         }}
                         alt={"facebook logo link"}
                    />
                    <img src={"/icons/instagramVector.svg"}
                         style={{
                             width: "5vw",
                             height: "5vw",
                         }}
                         alt={"instagram logo link"}
                    />
                </a>
            </div>
            <UnderFooterSection/>
        </footer>

    )
}

export default FooterSection;
