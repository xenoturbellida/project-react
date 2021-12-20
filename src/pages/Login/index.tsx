import styles from "../../App.module.sass";
import {LoginForm} from "../../components/LoginForm";
import React from "react";
import {Anchor} from "../../components/ui/Anchor";

export const LoginPage = () => {
    return (
        <div className={styles.login}>
            <div>LOGO</div>
            <LoginForm />
            <div>
                Есть логин для входа?
                <Anchor href='/register' title='Регистрация' />
            </div>
        </div>
    )
}
