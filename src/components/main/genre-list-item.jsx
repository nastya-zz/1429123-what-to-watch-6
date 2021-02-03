import React from 'react';
import PropTypes from "prop-types";

const GenreListItem = (props) => {
  const {genre} = props;
  return (
    <>
      <li className="catalog__genres-item catalog__genres-item--active">
        <a href="#" className="catalog__genres-link">{genre}</a>
      </li>
    </>
  );
};

GenreListItem.propTypes = {
  genre: PropTypes.string
};

export default GenreListItem;
