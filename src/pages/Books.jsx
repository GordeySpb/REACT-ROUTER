import React from 'react';
import PropTypes from 'prop-types';

import Card from '../components/Card';

/**
 *Создает Books
 *@param {Object} param.match обьект соответствия
 *@param {Array} param.data массив книг
 */
const Books = ({ match, data }) => {
  const books = match.params.topic ? data.filter(book => book.topic === match.params.topic) : data;
  return (
    <main id="books">
      <div className="mdc-layout-grid">
        <div className="mdc-layout-grid__inner">
          {books.map(book => (
            <div key={book.id} className="mdc-layout-grid__cell mdc-layout-grid__cell--span-6">
              <Card book={book} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

Books.propTypes = {
  match: PropTypes.objectOf(PropTypes.object).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Books;
