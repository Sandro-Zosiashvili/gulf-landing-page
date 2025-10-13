import styles from './Menu.module.scss';
import Menuitem from "@/app/components/MenuItem/Menuitem";
import Logo from "@/app/components/Logo/Logo";


const Menu = (props: any) => {

    return (
        <div className={styles.container}>
            <Logo/>
            <Menuitem/>
        </div>
    )
}


export default Menu;