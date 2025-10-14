import styles from './Button.module.scss'

interface Props {
    className?: string;
    mode: "light" | "dark";
    title: string;
}

const Button = (props: Props) => {
    const classes = [styles.container];
    if (props.mode === "dark") classes.push(styles.dark);
    if (props.mode === "light") classes.push(styles.light);


    return (
        <button
            className={`${classes.join(" ").trim()} ${props.className}`}

        >
            {props.title}
        </button>
    )
}

export default Button;