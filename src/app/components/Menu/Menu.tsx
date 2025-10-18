"use client"
import styles from './Menu.module.scss';
import Menuitem from "../MenuItem/MenuItem";
import Logo from "@/app/components/Logo/Logo";
import Button from "@/app/components/Button/Button";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import MenuItem from "../MenuItem/MenuItem";

const Menu = () => {
    const router = useRouter();
    const [mobileMenu, setMobileMenu] = useState(false);
    useEffect(() => {
        document.body.style.overflow = mobileMenu ? 'hidden' : '';
    }, [mobileMenu]);


    return (
        <nav className={styles.container}>
            <Logo title={true}/>
            <div className={styles.responsiveMenu}>
                <Menuitem/>
            </div>
            <div className={styles.mobileMenu}>
                <Button title={"ავტორიზაცია"} mode={"dark"} onClick={() => router.push("/sign-in")}/>
                <div className={styles.mobileMenuIcon} onClick={() => setMobileMenu(!mobileMenu)}>
                    <img src={mobileMenu ? '/icons/mobileMenuX.svg' : '/icons/menuIcon.svg'}
                         style={{
                             width: "5vw",
                             height: "5vw"
                         }} alt="menu icon"/>
                </div>
                {
                    mobileMenu &&
                    <div className={styles.mobileMenuPopup}>
                        <MenuItem/>
                    </div>
                }
            </div>
        </nav>
    )
}

export default Menu;
