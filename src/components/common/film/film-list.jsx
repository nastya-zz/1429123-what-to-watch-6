import React, {useEffect, useState} from "react";
import FilmItem from "./film-item";
import {filmsPropTypes} from "../../../prop-types/film";
import {PLAYING_DELAY} from "../../../constants/common";
import {connect, useDispatch} from "react-redux";
import PropTypes from "prop-types";
import {ActionCreator} from "../../../store/action";

const FilmList = ({filteredFilmsByGenre: films, mainPageFilmCount, genres}) => {
  const dispatch = useDispatch();

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

  useEffect(() => {
    dispatch(ActionCreator.setGenre(genres[0]));
    dispatch(ActionCreator.resetMainFilmsCount());
  }, []);

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
  filteredFilmsByGenre: state.filteredFilmsByGenre,
  genres: state.genres
});

FilmList.propTypes = {
  filteredFilmsByGenre: filmsPropTypes,
  mainPageFilmCount: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export {FilmList};
export default connect(mapStateToProps)(FilmList);
