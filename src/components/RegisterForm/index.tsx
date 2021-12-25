import React, {useState} from "react";
import { Input } from "../ui/Input";
import {Button} from "../ui/Button";
import styles from "../LoginForm/index.module.sass";
import {useNavigate} from "react-router-dom";

export const RegisterForm = () => {

    let navigate = useNavigate();

    const [loginField, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeated, setPasswordRepeated] = useState('');
    const [isError, setIsError] = useState(false);

    const handleInputChange = (event: {target: {value: string, name: string}; }) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        switch (name) {
            case 'login':
                setLogin(value);
                break;
            case 'password':
                setPassword(value);
                break;
            case 'passwordRepeated':
                setPasswordRepeated(value)
        }

        if (isError) {
            setIsError(false);
        }
    }

    const registerUser = (login: string, password: string) => {
        alert(`We attempt to register a new user with login ${login} and password ${password}`);
    }

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        if (password !== passwordRepeated) {
            setIsError(true);
        }
        else {
            registerUser(loginField, password);
            navigate('/login');
        }
        event.preventDefault();
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
            <Input
                name='passwordRepeated'
                type='password'
                placeholder='Повторите пароль'
                value={passwordRepeated}
                onChange={handleInputChange}
                isLast={!isError}
            />

            {isError &&
            <div className={styles.errorMessage}>
                Пароли не совпадают
            </div>
            }

            <Button
                onClick={handleSubmit}
                disabled={isError || loginField === '' || password === ''}
            >
                Регистрация
            </Button>
        </form>
    )
}