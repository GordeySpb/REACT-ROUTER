import React from 'react';
import PropTypes from 'prop-types';

import ToolBarLink from './ToolBarLink';

/**
 *Создает Toolbar
 *@param {Object} param.user пользователь
 */
const Toolbar = ({ user }) => (
  <header className="mdc-toolbar">
    <div className="mdc-toolbar__row">
      <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
        <span className="mdc-toolbar__title">Библиотека</span>
      </section>

      <section className="mdc-toolbar__section mdc-toolbar__section--align-end">
        <nav className="mdc-tab-bar">
          <ToolBarLink exact to="/" className="mdc-tab">Главная</ToolBarLink>
          <ToolBarLink to="/about" className="mdc-tab">О проекте</ToolBarLink>
          <ToolBarLink to="/books" className="mdc-tab">Книги</ToolBarLink>
          {user
            ? <ToolBarLink to="/logout" className="mdc-tab">Выйти</ToolBarLink>
            : <ToolBarLink to="/login" className="mdc-tab">Войти</ToolBarLink>
          }
        </nav>
      </section>
    </div>
  </header>
);

Toolbar.propTypes = {
  user: PropTypes.arrayOf(PropTypes.object),
};

Toolbar.defaultProps = {
  user: PropTypes.arrayOf(PropTypes.object),
};

export default Toolbar;
