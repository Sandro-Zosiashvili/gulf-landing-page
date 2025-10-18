import React from "react";
import Login from "@/app/components/Login/Login";

import styles from './page.module.scss'

const SignIn = () => {


    return (
        <div className={styles.container}>
           <Login  />
        </div>
    );
};

export default SignIn;