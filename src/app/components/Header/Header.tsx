import styles from './Header.module.scss';
import Linkwithicon from "@/app/components/Linkwithicon/Linkwithicon";


const Header = () => {
    return (
        <header className={styles.container}>
            <div className={styles.containerLeftContent}>
                <Linkwithicon title={"Gulf Retail"} icon={'./icons/link.svg'}/>
                <Linkwithicon title={"Sun Stores"} icon={'./icons/link.svg'}/>
            </div>
            <nav className={styles.headerRightContent}>
                <div className={styles.headerRightItem}>კარიერა</div>
                <div className={styles.headerRightItem}>რუკა</div>
                <div className={styles.headerRightItem}>კონტაქტი</div>
                <div>
                    <Linkwithicon title={"Ge"} icon={'./icons/language-drop-down-icon.svg'} medium={true}/>
                </div>
            </nav>
        </header>
    )
}

export default Header;
