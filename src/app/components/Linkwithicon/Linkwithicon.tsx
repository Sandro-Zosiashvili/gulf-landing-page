import styles from './Linkwithicon.module.scss';

interface Props {
    title: string;
    icon: string; // მხოლოდ icon-ის სახელი, მაგ: "link.svg", "down.svg"
    medium?: boolean;
    href?: string;
}

const LinkWithIcon = (props: Props) => {

    return (
        <a href={props.href} className={styles.container}>
            <span>{props.title}</span>
            <img
                src={`/icons/${props.icon}`}
                style={{
                    width: props.medium ? "0.613vw" : "0.408vw",
                    height: props.medium ? "0.613vw" : "0.408vw",
                }}
                alt={`icon for ${props.title}`}
            />
        </a>
    )
}

export default LinkWithIcon;