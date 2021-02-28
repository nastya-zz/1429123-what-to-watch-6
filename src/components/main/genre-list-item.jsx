import React from 'react';
import PropTypes from "prop-types";

const GenreListItem = (props) => {
  const {genre, isActive, onChangeGenre} = props;
  const liClass = (isSelected) => {
    return isSelected ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`;
  };

  return (
    <>
      <li className={liClass(isActive)}>
        <a href="#" onClick={() => onChangeGenre(genre)} className="catalog__genres-link">{genre}</a>
      </li>
    </>
  );
};

GenreListItem.propTypes = {
  genre: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onChangeGenre: PropTypes.func.isRequired
};

export default GenreListItem;
