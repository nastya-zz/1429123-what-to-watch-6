import React, {useState} from "react";
import PropTypes from "prop-types";
import MovieCardSmall from "./movie-card-small";
import {shapeFilm} from "../../mocks/films";

const FilmList = ({films}) => {
  const setActiveFilmId = useState(null)[1];

  const handleHover = (id) => {
    setActiveFilmId(id);
  };


  return (
    <div className="catalog__movies-list">
      {films.map((film, i) => (
        <MovieCardSmall
          onHover={handleHover}
          key={film.poster_image + i}
          film={film}
        />
      ))}
    </div>
  );
};

FilmList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape(shapeFilm)).isRequired
};

export default FilmList;
