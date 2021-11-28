import styles from './App.module.sass';
import React, {useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Provider} from "mobx-react";
import mainStore from "./stores/mainStore";
import {Input} from "./components/ui/Input";
import {Button} from "./components/ui/Button";
import {FavouritePage} from "./pages/Favourite";


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
        <form className={styles.form}>
            <Input
                name='login'
                type='text'
                placeholder='Адрес электронной почты'
                value={login}
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
        <>
            <h1>this is the main page</h1>
            <a href='/login'>login</a>
            <a href='/favourite'>Коллекции</a>
        </>
    );
}

const App = () => {
  return (
      <BrowserRouter>
          <Provider {...mainStore}>
            <Routes>
              <Route path='/login' element={<LoginPage/>} />
              <Route path='/' element={<MainPage/>} />
              <Route path='/favourite' element={<FavouritePage/>} />
            </Routes>
          </Provider>
      </BrowserRouter>

  );
}

export default App;
