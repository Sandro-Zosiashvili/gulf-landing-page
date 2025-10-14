"use client"
import styles from './Login.module.scss'
import Input from '../Input/Input';
import {useState} from 'react';
import Image from 'next/image'
import Button from "@/app/components/Button/Button";


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [visibility, setVisibility] = useState(true);

    return (
        <div className={styles.container}>
            <div className={styles.loginTitle}>
                ავტორიზაცია
            </div>
            <div className={styles.inputGap}>
                <Input
                    type="text"
                    placeholder="მომხმარებლის სახელი"
                    value={username}
                    onChange={setUsername}
                />
                <div className={styles.passwordInput}>
                    <Input
                        type={visibility ? 'password' : 'text'}
                        placeholder="პაროლი"
                        value={password}
                        onChange={setPassword}
                    />
                    <div className={styles.visibility} onClick={() => setVisibility(!visibility)}>
                        <Image src={visibility ?
                            './icons/visibility.svg' :
                            './icons/disability.svg'}
                               alt={'password-visibility'} width={24} height={24}/>

                    </div>
                </div>
            </div>
            <Input
                type="checkbox"
                onChange={setPassword}
                checkBox={true}
            />
            <div className={styles.button}>
                <Button mode={"dark"} title={"შესვლა"}/>
                <Button mode={"light"} title={"ბარათის შეკვეთა"}/>

            </div>
        </div>
    )
}

export default Login;