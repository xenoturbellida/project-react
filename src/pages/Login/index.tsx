import styles from "../../App.module.sass";
import {LoginForm} from "../../components/LoginForm";
import React from "react";
import {Anchor} from "../../components/ui/Anchor";
import logo from '../../assets/logos/Logo_Full.png';

export const LoginPage = () => {
    return (
        <div className={styles.login}>
            <img className={styles.logo} src={logo} alt='Логотип'/>
            <LoginForm />
            <div className={styles.prompt}>
                Ещё не зарегистрированы?
                <Anchor href='/register'>
                    Регистрация
                </Anchor>
            </div>
        </div>
    )
}
