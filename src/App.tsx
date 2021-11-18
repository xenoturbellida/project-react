import './App.css';
import React from "react";

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


class LoginForm extends React.Component<any, any> {
  constructor(props: {}) {
    super(props);
    this.state = {
      login: '',
      password: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event: { target: {value: string, name: string}; }) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event: { preventDefault: () => void; }) {
    alert('A form was submitted!' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
        <form className='form' onSubmit={this.handleSubmit}>
          <Input
              name='login'
              className='Input-field'
              type='text'
              placeholder='Адрес электронной почты'
              value={this.state.login}
              onChange={this.handleInputChange}
          />
          <Input
              name='password'
              className='Input-field'
              type='password'
              placeholder='Пароль'
              value={this.state.password}
              onChange={this.handleInputChange}
          />
          <input name='' className='submitButton' type='submit' value='Войти' />
        </form>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LoginForm />
      </header>
    </div>
  );
}

export default App;
