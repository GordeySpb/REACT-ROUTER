import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 *Создает Sidenav
 *@param {Array} param.topics массив с подразделами
 */

const Sidenav = ({ topics }) => (
  <aside className="mdc-permanent-drawer">
    <nav className="mdc-list mdc-list--avatar-list">
      {topics.map(topic => (
        <NavLink
          key={topic.id}
          to={`/books/${topic.id}`}
          className="mdc-list-item"
          activeClassName="mdc-temporary-drawer--selected"
        >
          <img alt="" src={`/img/topics/${topic.id}.svg`} className="mdc-list-item__start-detail" />
          {topic.title}
        </NavLink>
      ))}
    </nav>
  </aside>
);

Sidenav.propTypes = {
  topics: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Sidenav;
