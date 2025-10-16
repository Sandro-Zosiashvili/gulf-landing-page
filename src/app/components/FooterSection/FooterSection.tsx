import styles from './FooterSection.module.scss'
import MenuItem from "@/app/components/MenuItem/Menuitem";
import Button from "@/app/components/Button/Button";
import FooterSectionItem from "@/app/components/FooterSectionItem/FooterSectionItem";
import React from "react";


const FooterSection = () => {


    return (

        <div className={styles.container}>
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
            <div className={styles.underFooter}>

            </div>
        </div>

    )
}

export default FooterSection;