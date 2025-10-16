import styles from './Menu.module.scss';
import Menuitem from "../MenuItem/Menuitem";
import Logo from "@/app/components/Logo/Logo";

const Menu = () => {
    return (
        <nav className={styles.container}>
            <Logo title={true} />
            <Menuitem/>
        </nav>
    )
}

export default Menu;
