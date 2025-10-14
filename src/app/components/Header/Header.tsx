import styles from './Header.module.scss';
import Linkwithicon from "@/app/components/Linkwithicon/Linkwithicon";


const Header = () => {


    return (
        <div className={styles.container}>
            <div className={styles.containerLeftContent}>
                <Linkwithicon title={"Gulf Retail"} icon={'./icons/link.svg'}/>
                <Linkwithicon title={"Sun Stores"} icon={'./icons/link.svg'}/>
            </div>
            <div className={styles.headerRightContent}>
                <div className={styles.headerRightItem}>კარიერა</div>
                <div className={styles.headerRightItem}>რუკა</div>
                <div className={styles.headerRightItem}>კონტაქტი</div>
                <div>
                    <Linkwithicon title={"Ge"} icon={'./icons/language-drop-down-icon.svg'} medium={true}/>
                </div>
            </div>
        </div>
    )
}

export default Header;