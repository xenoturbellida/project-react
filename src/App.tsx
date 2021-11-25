import styles from './App.module.sass';
import React, {useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

const Input = (props: {
  name: string,
  className: string,
  type: string,
  placeholder: string,
  value: string,
  onChange: (event: { target: {value: string, name: string}; }) => void}) => {
  return (
      <input
          name={props.name}
          className={props.className}
          type={props.type}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
      />
  )
}


const LoginForm = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        alert('A form was submitted!');
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
        <form className={styles.form} onSubmit={handleSubmit}>
            <Input
                name='login'
                className={styles.inputField}
                type='text'
                placeholder='Адрес электронной почты'
                value={login}
                onChange={handleInputChange}
            />
            <Input
                name='password'
                className={styles.inputField}
                type='password'
                placeholder='Пароль'
                value={password}
                onChange={handleInputChange}
            />
            <input name='' className={styles.submitButton} type='submit' value='Войти' />
        </form>
    );


}

const LoginPage = () => {
    return (
        <div className={styles.App}>
            <div className={styles.body}>
                <div className={styles.container}>
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}
const MainPage = () => {
    return (
        <h1>this is the main page</h1>
    );
}

const App = () => {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/login' element={<LoginPage/>} />
              <Route path='/' element={<MainPage/>} />
          </Routes>
      </BrowserRouter>

  );
}

export default App;
