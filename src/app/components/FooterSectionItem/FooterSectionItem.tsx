"use client"
import React, {useState} from "react";
import styles from "./FooterSectionItem.module.scss";
import Button from "@/app/components/Button/Button";

interface Props {
    title: string;
    items?: string[];
    icon?: boolean;
}

const FooterSectionItem: React.FC<Props> = ({title, items, icon}) => {
    const [active, setActive] = useState(false);

    return (
        <section className={styles.footerSectionItem}>
            <div className={styles.responsiveTitle} onClick={() => setActive(!active)}>
                <h3 className={styles.title}>{title}</h3>
                <div className={styles.titleDows}>
                    <img src={active ? "/icons/up.svg" : "/icons/down.svg"} style={{
                        width: "2.564vw",
                        height: "1.282vw",
                    }} alt="icon"/>
                </div>
            </div>

            {icon ? (

                <div className={styles.fitGap}>
                    <div className={styles.fitContent}>
                        <Button iconSrc={'/icons/fcVector.svg'} mode={"onlyIcon"}/>
                    </div>
                    <div className={styles.fitContent}>
                        <Button iconSrc={'/icons/instagramVector.svg'} mode={"onlyIcon"}/>
                    </div>
                </div>

            ) : (

                active && (
                    <>
                        <ul className={styles.listResponsive}>
                            {items?.map((item, index) => (
                                <li key={index} className={styles.listItem}>{item}</li>
                            ))}
                        </ul>
                    </>

                )


            )}
            <ul className={styles.list}>
                {items?.map((item, index) => (
                    <li key={index} className={styles.listItem}>{item}</li>
                ))}
            </ul>
        </section>
    )
        ;
};

export default FooterSectionItem;
