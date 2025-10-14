import styles from './Logo.module.scss';
import Image from 'next/image';

const Logo = () => {


    return (
        <div className={styles.container}>
            <div>
                <Image src={"./icons/gulf-logo.svg"} width={37} height={34} alt={'Main Logo'}/>
            </div>
            <div className={styles.middleLine}></div>
            <div>
                <Image src={"./icons/gulf-title.svg"} width={120} height={31} alt={'Main Logo'}/>
            </div>
        </div>
    )
}

export default Logo;