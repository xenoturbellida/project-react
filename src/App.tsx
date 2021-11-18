import './App.css';
import React, {useState} from "react";

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

const Button = (props: {className: string, onClick: () => void, value: string}) => {
  return (
      <button
        className={props.className}
        onClick={props.onClick}>
        {props.value}
      </button>
  )
}

const LoginForm = (props: {}) => {
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
        <form className='form' onSubmit={handleSubmit}>
            <Input
                name='login'
                className='Input-field'
                type='text'
                placeholder='Адрес электронной почты'
                value={login}
                onChange={handleInputChange}
            />
            <Input
                name='password'
                className='Input-field'
                type='password'
                placeholder='Пароль'
                value={password}
                onChange={handleInputChange}
            />
            <input name='' className='submitButton' type='submit' value='Войти' />
        </form>
    );


}

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <LoginForm />
      </header>
    </div>
  );
}

export default App;
