import React, {useState} from "react";
import MovieCardSmall from "./movie-card-small";
import {filmsPropTypes} from "../../prop-types/film";

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
          key={film.posterImage + i}
          film={film}
        />
      ))}
    </div>
  );
};

FilmList.propTypes = {
  films: filmsPropTypes
};

export default FilmList;
