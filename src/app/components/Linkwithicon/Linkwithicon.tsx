import styles from './Linkwithicon.module.scss';

import Image from "next/image";

interface Props {
    title: string;
    icon: string;
    medium?: boolean;
}

const LinkWithIcon = (props: Props) => {
    return (
        <div className={styles.container}>
            <div>
                {props.title}
            </div>
            {
                props.medium ?
                    <img src={props.icon}
                           style={{
                               width: "0.613vw",
                               height: "0.613vw",
                           }} alt="icon for new windows"/> :
                    <img src={props.icon}
                         style={{
                             width: "0.408vw",
                             height: "0.408vw",
                         }}
                         alt="icon for new windows"/>

            }
        </div>
    )
}


export default LinkWithIcon