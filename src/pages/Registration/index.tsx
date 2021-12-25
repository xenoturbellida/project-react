import logo from '../../assets/logos/Logo_Full.png';
import {RegisterForm} from "../../components/RegisterForm";
import { Anchor } from '../../components/ui/Anchor';
import styles from "../../App.module.sass";
import React from "react";

export const RegisterPage = () => {
    return (
        <div className={styles.login}>
            <img src={logo} className={styles.logo} alt='Логотип' />
            <RegisterForm />
            <div className={styles.prompt}>
                Есть логин для входа?
                <Anchor href='/login'>
                    Войти
                </Anchor>
            </div>
        </div>
    )
}