"use client";
import {useEffect, useState} from "react";
import styles from "./Header.module.scss";
import Linkwithicon from "@/app/components/Linkwithicon/Linkwithicon";

const Header = () => {
    const [active, setActive] = useState(false);
    return (
        <>
            <header className={styles.container}>
                <div className={styles.containerLeftContent}>
                    <Linkwithicon title={"Gulf Retail"} icon={"link.svg"}/>
                    <Linkwithicon title={"Sun Stores"} icon={"link.svg"}/>
                </div>
                <nav className={styles.headerRightContent}>
                    <div className={styles.responsiveHeader}>
                        <div className={styles.headerRightItem}>კარიერა</div>
                        <div className={styles.headerRightItem}>რუკა</div>
                        <div className={styles.headerRightItem}>კონტაქტი</div>
                    </div>
                    <div onClick={() => setActive(!active)} className={styles.headerDropDown}>
                        <Linkwithicon
                            title={"Ge"}
                            icon={"language-drop-down-icon.svg"}
                            medium={true}
                        />
                        {
                            active &&
                            <div className={styles.languageDropDown}>
                                <p>English</p>
                                <p>Georgian</p>
                            </div>

                        }
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;
