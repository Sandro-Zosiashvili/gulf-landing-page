import styles from './Menu.module.scss';
import Menuitem from "../MenuItem/Menuitem";
import Logo from "@/app/components/Logo/Logo";


const Menu = () => {

    return (
        <div className={styles.container}>
            <Logo/>
            <Menuitem/>
        </div>
    )
}


export default Menu;