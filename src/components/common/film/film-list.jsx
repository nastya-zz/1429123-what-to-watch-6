import React, {useEffect, useState} from "react";
import FilmItem from "./film-item";
import {filmsPropTypes} from "../../../prop-types/film";
import {PLAYING_DELAY} from "../../../constants/common";

const FilmList = ({films}) => {

  const [activeFilmId, setActiveFilmId] = useState(null);
  const [isPlaying, setPlaying] = useState(false);

  const handleHover = (id) => {
    setPlaying(false);
    setActiveFilmId(id);
  };

  let timeoutId;

  useEffect(() => {
    if (activeFilmId) {
      timeoutId = setTimeout(() => {
        setPlaying(true);
      }, PLAYING_DELAY);
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [activeFilmId]);

  return (
    <div className="catalog__movies-list">
      {films.map((film, i) => (
        <FilmItem
          handleHover={handleHover}
          isPlaying={isPlaying && (activeFilmId === film.id)}
          key={i}
          film={film}
        />
      ))}
    </div>
  );
};


FilmList.propTypes = {
  films: filmsPropTypes,
};

export default FilmList;
