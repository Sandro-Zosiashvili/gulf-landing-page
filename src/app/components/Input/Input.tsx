import styles from './Input.module.scss'
import {useState} from "react";

interface Props {
    type?: string;
    placeholder?: string;
    value?: string;
    onChange: (value: string) => void;
    checkBox?: boolean;
    password?: boolean;
    general?: boolean;
}

const Input = (props: Props) => {

    const [visibility, setVisibility] = useState(true);

    return (
        <div>
            {
                props.checkBox &&
                <div className={styles.checkBox}>
                    <input type={'checkbox'}/>
                    <span>დამახსოვრება</span>
                </div>
            }
            {
                props.general &&
                <input
                    className={styles.input}
                    type={props.type}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={(e) => props.onChange(e.target.value)}
                />

            }
            {props.password &&
                <div className={styles.wrapper}>
                    <input
                        className={styles.input}
                        type={visibility ? 'password' : 'text'}
                        placeholder={props.placeholder}
                        value={props.value}
                        onChange={(e) => props.onChange(e.target.value)}
                    />

                    <div className={styles.visibility} onClick={() => setVisibility(!visibility)}>
                        <img src={visibility ?
                            './icons/visibility.svg' :
                            './icons/disability.svg'}
                             alt={'password-visibility'} style={{
                            width: '1.634vw',
                            height: '1.634vw',
                        }}/>
                    </div>
                </div>


            }
        </div>


    )
}

export default Input;