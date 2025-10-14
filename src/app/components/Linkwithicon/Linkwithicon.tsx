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
                    <Image src={props.icon} height={9} width={9} alt="icon for new windows"/> :
                    <Image src={props.icon} height={6} width={6} alt="icon for new windows"/>

            }
        </div>
    )
}


export default LinkWithIcon