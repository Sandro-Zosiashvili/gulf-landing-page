import styles from './UnderFooterSection.module.scss'
import Logo from "@/app/components/Logo/Logo";

const UnderFooterSection = () => {
    return (
        <footer className={styles.container}>
            <div className={styles.logo}>
                <Logo title={false} large={true} />
                <div className={styles.underContent}>
                    <p>2022</p>
                    <p>წესები</p>
                    <p>კონფიდენციალურობა</p>
                </div>
            </div>
            <div className={styles.language}>
                <p>ქართლი</p>
                <img src={'/icons/languageVector.svg'} alt={'language-drop-down-icon'} width="10px" height="10px" />
            </div>
        </footer>
    )
}

export default UnderFooterSection;
