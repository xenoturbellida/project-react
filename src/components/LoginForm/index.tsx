import React, {useState} from "react";
import styles from './index.module.sass';
import {Input} from "../ui/Input";
import {Button} from "../ui/Button";
import {observer} from "mobx-react";
import {useStores} from "../../utils/store-utils";

export const LoginForm = observer(() => {
    const {authStore: {login, isError}} = useStores();

    const [loginField, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        alert('A form was submitted!');
        login(loginField, password);
        event.preventDefault();
    }

    const handleInputChange = (event: { target: {value: string, name: string}; }) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        if (name === 'login') {
            setLogin(value);
        }
        else if (name === 'password') {
            setPassword(value);
        }
    }

    return (
        <form className={styles.form}>
            <Input
                name='login'
                type='text'
                placeholder='Адрес электронной почты'
                value={loginField}
                onChange={handleInputChange}
            />
            <Input
                name='password'
                type='password'
                placeholder='Пароль'
                value={password}
                onChange={handleInputChange}
            />
            <Button onClick={handleSubmit} title='Войти' />
        </form>
    );
})
