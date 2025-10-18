import styles from './Logo.module.scss';
import Image from 'next/image';

interface Props {
    title?: boolean;
    large?: boolean;
}

const Logo = (props: Props) => {

    return (
        <figure className={styles.container}>
            <div>
                {props.large ? (
                    <img
                        className={styles.mainLogoLarge}
                        src={"/icons/gulf-logo.svg"}
                        style={{width: '3.472vw', height: '3.199vw'}}
                        alt="Main Logo"
                    />
                ) : (
                    <img
                        className={styles.mainLogo}
                        src={"/icons/gulf-logo.svg"}
                        style={{width: '2.519vw', height: '4.381vh'}}
                        alt="Main Logo"
                    />
                )}
            </div>
            {props.title && (
                <>
                    <div className={styles.middleLine}></div>
                    <img
                        className={styles.titleImg}
                        src={"/icons/gulf-title.svg"}
                        style={{width: '8.169vw', height: '3.995vh'}}
                        alt="Main Logo"
                    />
                </>
            )}
        </figure>
    )
}

export default Logo;
