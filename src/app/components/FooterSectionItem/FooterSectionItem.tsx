import React from "react";
import styles from "./FooterSectionItem.module.scss";
import Button from "@/app/components/Button/Button";

interface Props {
    title: string;
    items?: string[];
    icon?: boolean;
}

const FooterSectionItem: React.FC<Props> = ({title, items, icon}) => {
    return (
        <div className={styles.footerSectionItem}>
            <h3 className={styles.title}>{title}</h3>

            {icon ? (
                <div className={styles.fitGap}>
                    <div className={styles.fitContent}>
                        <Button iconSrc={'./icons/fcVector.svg'} mode={"onlyIcon"}/>
                    </div>
                    <div className={styles.fitContent}>
                        <Button iconSrc={'./icons/instagramVector.svg'} mode={"onlyIcon"}/>
                    </div>
                </div>
            ) : (
                <ul className={styles.list}>
                    {items?.map((item, index) => (
                        <li key={index} className={styles.listItem}>
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default FooterSectionItem;
