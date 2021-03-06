import React from "react";
import PropTypes from "prop-types";
import GenreListItem from "./genre-list-item";
import {GENRE_MAIN_COUNT} from "../../constants/common";

const GenreList = (props) => {
  const {genres, activeGenre, handleChangeGenre} = props;

  return (
    <ul className="catalog__genres-list">
      {genres.slice(0, GENRE_MAIN_COUNT).map((g, i) => <GenreListItem key={g + i} genre={g} isActive={activeGenre === g} onChangeGenre={handleChangeGenre}/>)}
    </ul>
  );
};

GenreList.propTypes = {
  activeGenre: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleChangeGenre: PropTypes.func.isRequired
};

export default GenreList;
