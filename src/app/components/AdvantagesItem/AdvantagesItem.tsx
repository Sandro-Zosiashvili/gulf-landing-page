import styles from './AdvantagesItem.module.scss'

interface Props {
    number: number;
    title: string;
    description: string;
}
const AdvantagesItem = (props: Props) => {

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                {props.number}
            </div>
            <p className={styles.title}>
                {props.title}
            </p>
            <p className={styles.description}>
                {props.description}
            </p>

        </div>
    )
}

export default AdvantagesItem
