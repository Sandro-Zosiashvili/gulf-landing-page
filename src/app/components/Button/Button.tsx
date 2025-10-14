import styles from './Button.module.scss'

interface Props {
    className?: string;
    mode: "light" | "dark";
    title: string;
    icon?: boolean
}

const Button = (props: Props) => {
    const classes = [styles.container];
    if (props.mode === "dark") classes.push(styles.dark);
    if (props.mode === "light") classes.push(styles.light);

    return (
        <button  className={`${classes.join(" ").trim()} ${props.className}`}
        >
            {props.title}
            {
                props.icon &&
                <div className={styles.buttonIcon}>
                    <img  src={'./icons/right-svg-prices.svg'}
                         style={{
                             width: "1.361vw",
                             height: "2.577vw",
                         }}
                         alt="icon"/>
                </div>

            }
        </button>
    )
}

export default Button;