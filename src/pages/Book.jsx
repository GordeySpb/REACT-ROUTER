import React from 'react';
import PropTypes from 'prop-types';

/**
 *Создает Book
 *@param {Object} param.match обьект соответствия
 *@param {Array} param.data массив книг
 */

const Book = ({ match, data }) => {
  const book = data.find(item => item.slug === match.params.book);

  return (
    <main id="book">
      <div className="mdc-card">
        <div className="mdc-card__horizontal-block">
          <img src={`/img/books/${book.cover}`} className="mdc-card__media-item mdc-card__media-item--3x" alt={book.title} />
          <section className="mdc-card__primary">
            <h1 className="mdc-card__title mdc-card__title--large">{book.title}</h1>
            <p className="mdc-card__subtitle">{book.author}</p>
            <p className="mdc-card__subtitle">{book.publisher}</p>
            <p className="mdc-card__subtitle">
              {book.pages}
              {'стр.'}
            </p>
            <p className="mdc-card__subtitle">
              {book.year}
              {'г.'}
            </p>
            <div className="mdc-typography--body1">{book.description}</div>
          </section>
        </div>
      </div>
    </main>
  );
};

Book.propTypes = {
  match: PropTypes.objectOf(PropTypes.object).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Book;
