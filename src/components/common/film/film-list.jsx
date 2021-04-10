import React, {useCallback, useEffect, useState} from "react";
import FilmItem from "./film-item";
import {filmsPropTypes} from "../../../prop-types/film";
import {PLAYING_DELAY} from "../../../constants/common";
import PropTypes from "prop-types";


const FilmList = ({films, history}) => {

  const [activeFilmId, setActiveFilmId] = useState(null);
  const [isPlaying, setPlaying] = useState(false);

  const handleHover = useCallback((id) => {
    setPlaying(false);
    setActiveFilmId(id);
  }, [activeFilmId]);


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
          history={history}
        />
      ))}
    </div>
  );
};


FilmList.propTypes = {
  films: filmsPropTypes,
  history: PropTypes.object.isRequired
};

export default FilmList;
