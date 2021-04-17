import React, {useEffect} from 'react';
import GenreList from "./genre-list";
import FilmList from "../common/film/film-list";
import ShowMoreBtn from "./show-more-btn";
import {useDispatch, useSelector} from "react-redux";
import {resetMainFilmsCount, setGenre, showMoreFilms} from "../../store/action";
import {filmsByGenreSelector} from "../../store/film/film-selector";
import PropTypes from "prop-types";

const Catalog = ({history}) => {
  const dispatch = useDispatch();

  const activeGenre = useSelector(({MAIN}) => MAIN.activeGenre);
  const mainPageFilmCount = useSelector(({MAIN}) => MAIN.mainPageFilmCount);
  const genres = useSelector(({MAIN}) => MAIN.genres);
  const store = useSelector((state) => state);
  const filteredFilmsByGenre = filmsByGenreSelector(store);

  const handleChangeGenre = (type) => {
    dispatch(setGenre(type));
    dispatch(resetMainFilmsCount());
  };

  const handleBtnClick = () => {
    dispatch(showMoreFilms());
  };

  useEffect(() => {
    dispatch(setGenre(genres[0]));
    dispatch(resetMainFilmsCount());
  }, []);

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenreList genres={genres} activeGenre={activeGenre} handleChangeGenre={handleChangeGenre}/>

      <FilmList films={filteredFilmsByGenre.slice(0, mainPageFilmCount)} history={history}/>

      {
        filteredFilmsByGenre.length > mainPageFilmCount
        &&
        <ShowMoreBtn
          handleBtnClick={handleBtnClick}
        />
      }
    </section>
  );
};

Catalog.propTypes = {
  history: PropTypes.object.isRequired
};

export default Catalog;
