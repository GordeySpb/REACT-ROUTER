import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 *Создает Login
 *@param {Function} param.onLogin функция входа
 */
class Login extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    const { onLogin } = this.props;

    onLogin({
      username: this.usernameInput.value,
      password: this.passwordInput.value,
    });
  }

  render() {
    return (
      <main id="login">
        <form onSubmit={this.onSubmit}>
          <div className="mdc-textfield">
            <input
              type="text"
              name="username"
              className="mdc-textfield__input"
              placeholder="Имя пользователя"
              ref={(input) => { this.usernameInput = input; }}
            />
          </div>

          <div className="mdc-textfield">
            <input
              type="password"
              name="password"
              className="mdc-textfield__input"
              placeholder="Пароль"
              ref={(input) => { this.passwordInput = input; }}
            />
          </div>

          <button type="submit" className="mdc-button mdc-button--primary mdc-button--raised">Войти</button>
        </form>
      </main>
    );
  }
}

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default Login;
