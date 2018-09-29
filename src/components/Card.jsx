import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ book }) => (
  <div className="mdc-card">
    <div className="mdc-card__horizontal-block">
      <img src={`/img/books/${book.cover}`} className="mdc-card__media-item mdc-card__media-item--2x" alt={book.title} />

      <section className="mdc-card__primary">
        <h2 className="mdc-card__title mdc-card__title--large">{book.title}</h2>
        <p className="mdc-card__subtitle">{book.author}</p>
        <p className="mdc-card__subtitle">
          {book.publisher}
          {' '}
          {book.year}
        </p>
      </section>
    </div>

    <section className="mdc-card__actions">
      <a href={`/books/${book.topic}/${book.slug}`} className="mdc-button mdc-card__action">Подробнее</a>
    </section>
  </div>
);

Card.propTypes = {
  book: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Card;
