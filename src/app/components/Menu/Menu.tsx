"use client"
import styles from './Menu.module.scss';
import Menuitem from "../MenuItem/MenuItem";
import Logo from "@/app/components/Logo/Logo";
import Button from "@/app/components/Button/Button";
import {useRouter} from "next/navigation";

const Menu = () => {
    const router = useRouter();
    return (
        <nav className={styles.container}>
            <Logo title={true}/>
            <div className={styles.responsiveMenu}>
                <Menuitem/>
            </div>
            <div className={styles.mobileMenu}>
                <Button title={"ავტორიზაცია"} mode={"dark"} onClick={() => router.push("/sign-in")}/>
                <div className={styles.mobileMenuIcon}>
                    <img src={'/icons/menuIcon.svg'}
                         style={{
                             width: "5vw",
                             height: "5vw"
                         }} alt="menu icon"/>
                </div>
            </div>
        </nav>
    )
}

export default Menu;
