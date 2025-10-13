import styles from './MenuItem.module.scss';

interface Item {
    title: string;
    path: string;
}

const MenuItem = () => {

    const data = [
        {
            title: 'GULF CARD',
            path: ''
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
            {
                data.map((item: Item, index: number) => (
                    <div key={index}>
                        {item.title}
                    </div>
                ))
            }

        </div>
    )
}

export default MenuItem;