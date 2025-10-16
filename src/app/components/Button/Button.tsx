import React from "react";
// import styles from "./Button.module.css";
import styles from './Button.module.scss'

type ButtonProps = {
    title: string;
    mode?: "light" | "dark" | "more" | "withIcon";
    iconSrc?: string;
    className?: string;
    onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({title, mode = "light", iconSrc, className, onClick,}) => {
    return (
        <button
            className={`${styles.container} ${styles[mode]} ${className || ""}`}
            onClick={onClick}
        >
            <span>{title}</span>
            {iconSrc && (
                <div className={styles.buttonIcon}>
                    <img src={iconSrc} alt="icon" style={{width: "1.021vw", height: "1.021vw"}}/>
                </div>
            )}
        </button>
    );
};

export default Button;
