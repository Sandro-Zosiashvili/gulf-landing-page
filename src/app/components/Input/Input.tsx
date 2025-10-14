import styles from './Input.module.scss'

interface Props {
    type: string;
    placeholder?: string;
    value?: string;
    onChange: (value: string) => void;
    checkBox?: boolean;
}

const Input = (props: Props) => {
    return (
        <div>
            {
                props.checkBox ?
                    <div className={styles.checkBox}>
                        <input type={'checkbox'}/>
                        <span>დამახსოვრება</span>
                    </div>
                    :
                    <input
                        className={styles.input}
                        type={props.type}
                        placeholder={props.placeholder}
                        value={props.value}
                        onChange={(e) => props.onChange(e.target.value)}
                    />

            }
        </div>


    )
}

export default Input;