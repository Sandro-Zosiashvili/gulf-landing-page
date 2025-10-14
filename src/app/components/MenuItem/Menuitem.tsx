import styles from './MenuItem.module.scss';
import Linkwithicon from "@/app/components/Linkwithicon/Linkwithicon";

interface Item {
    title: string;
    path: string;
    icon: string;
}

const MenuItem = () => {

    const data = [
        {
            title: 'GULF CARD',
            path: '',
            icon: "/icons/language-drop-down-icon.svg"
        }, {
            title: 'საერთაშორისო ბარათები',
            path: ''
        }, {
            title: 'ტენდერი',
            path: ''
        }, {
            title: 'ვაუჩერული სისტემა',
            path: ''
        }, {
            title: 'საბითუმო მომსახურება',
            path: ''
        }
    ]

    return (
        <div className={styles.container}>
            {data.map((item, index) => (
                <div className={styles.menuItem} key={index}>
                    {item.icon ? (
                        <Linkwithicon title={item.title} icon={item.icon} medium/>
                    ) : (
                        item.title
                    )}
                </div>
            ))}
        </div>
    )
}

export default MenuItem;