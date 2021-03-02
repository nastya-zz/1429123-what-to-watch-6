import React, {useState, useEffect} from "react";
import FilmItem from "./film-item";
import {filmsPropTypes} from "../../../prop-types/film";
import {PLAYING_DELAY} from "../../../constants/common";
import {connect} from "react-redux";
import PropTypes from "prop-types";

const FilmList = ({films, genre}) => {
  const [activeFilmId, setActiveFilmId] = useState(null);
  const [isPlaying, setPlaying] = useState(false);
  const [filteredFilms, setFilteredFilms] = useState([...films]);

  useEffect(() => {
    if (genre === `All genres`) {
      setFilteredFilms([...films]);
    } else {
      setFilteredFilms(films.filter((film) => film.genre === genre));
    }
  }, [genre]);

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
      {filteredFilms.map((film, i) => (
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
  genre: state.genre,
});

FilmList.propTypes = {
  films: filmsPropTypes,
  genre: PropTypes.string.isRequired
};

export {FilmList};
export default connect(mapStateToProps)(FilmList);
