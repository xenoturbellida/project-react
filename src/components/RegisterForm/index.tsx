import React, {useState} from "react";
import { Input } from "../ui/Input";
import {Button} from "../ui/Button";

export const RegisterForm = () => {
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
            registerUser(loginField, password)
        }
        event.preventDefault();
    }

    return (
        <form>
            <Input
                name='login'
                type='text'
                placeholder='placeholder'
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
                placeholder='Пароль'
                value={passwordRepeated}
                onChange={handleInputChange}
            />

            <Button
                onClick={handleSubmit}
                title='Зарег'
                disabled={isError || loginField === '' || password === ''}
            />
        </form>
    )
}