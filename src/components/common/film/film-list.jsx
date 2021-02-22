import React, {useState, useEffect} from "react";
import FilmItem from "./film-item";
import {filmsPropTypes} from "../../../prop-types/film";

const FilmList = ({films}) => {
  const [activeFilmId, setActiveFilmId] = useState(null);
  const [isPlaying, setPlaying] = useState(false);

  const handleHover = (id) => {
    setActiveFilmId(id);
  };

  let timeoutId;

  useEffect(() => {
    if (activeFilmId) {
      timeoutId = setTimeout(() => {
        setPlaying(true);
      }, 1000);
    } else {
      setPlaying(false);
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