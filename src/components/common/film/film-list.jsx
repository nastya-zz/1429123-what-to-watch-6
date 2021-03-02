import React, {useState, useEffect} from "react";
import FilmItem from "./film-item";
import {filmsPropTypes} from "../../../prop-types/film";
import {PLAYING_DELAY} from "../../../constants/common";
import {connect} from "react-redux";
import PropTypes from "prop-types";

const FilmList = ({filteredFilmsByGenre: films, mainPageFilmCount}) => {
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
      {films.slice(0, mainPageFilmCount).map((film, i) => (
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

const mapStateToProps = (state) => ({
  mainPageFilmCount: state.mainPageFilmCount,
  filteredFilmsByGenre: state.filteredFilmsByGenre
});

FilmList.propTypes = {
  filteredFilmsByGenre: filmsPropTypes,
  mainPageFilmCount: PropTypes.number.isRequired
};

export {FilmList};
export default connect(mapStateToProps)(FilmList);
