import styles from './Logo.module.scss';
import Image from 'next/image';

const Logo = () => {

    return (
        <div className={styles.container}>
            <div>
                <img src={"./icons/gulf-logo.svg"}
                     style={{
                         width: '2.519vw',
                         height: '4.381vh',
                     }}
                     alt={'Main Logo'}/>
            </div>
            <div className={styles.middleLine}></div>
            <div>
                <img src={"./icons/gulf-title.svg"}
                     style={{
                         width: '8.169vw',
                         height: '3.995vh',
                     }}
                     alt={'Main Logo'}/>
            </div>
        </div>
    )
}

export default Logo;