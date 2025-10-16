"use client"
import styles from './Login.module.scss'
import Input from '../Input/Input';
import {useState} from 'react';
import Image from 'next/image'
import Button from "@/app/components/Button/Button";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form className={styles.container}>
            <h2 className={styles.loginTitle}>ავტორიზაცია</h2>
            <div className={styles.inputGap}>
                <Input
                    type="text"
                    placeholder="მომხმარებლის სახელი"
                    value={username}
                    general={true}
                    onChange={setUsername}
                />
                <div className={styles.passwordInput}>
                    <Input
                        placeholder="პაროლი"
                        value={password}
                        password={true}
                        onChange={setPassword}
                    />
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
        </form>
    )
}

export default Login;
