import React, {useEffect} from 'react';
import GenreList from "./genre-list";
import FilmList from "../common/film/film-list";
import ShowMoreBtn from "./show-more-btn";
import {useDispatch, useSelector} from "react-redux";
import {ActionCreator} from "../../store/action";

const Catalog = () => {
  const dispatch = useDispatch();

  const {
    mainPageFilmCount,
    filteredFilmsByGenre,
    activeGenre,
    genres
  } = useSelector((state) => ({
    mainPageFilmCount: state.mainPageFilmCount,
    filteredFilmsByGenre: state.filteredFilmsByGenre,
    genres: state.genres,
    activeGenre: state.activeGenre
  }));

  const handleChangeGenre = (type) => {
    dispatch(ActionCreator.setGenre(type));
    dispatch(ActionCreator.resetMainFilmsCount());
  };

  const handleBtnClick = () => {
    dispatch(ActionCreator.showMoreFilms());
  };

  useEffect(() => {
    dispatch(ActionCreator.setGenre(genres[0]));
    dispatch(ActionCreator.resetMainFilmsCount());
  }, []);

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenreList genres={genres} activeGenre={activeGenre} handleChangeGenre={handleChangeGenre} />

      <FilmList films={filteredFilmsByGenre.slice(0, mainPageFilmCount)} />

      { filteredFilmsByGenre.length > mainPageFilmCount
        &&
        <ShowMoreBtn
          handleBtnClick={handleBtnClick}
        />
      }
    </section>
  );
};


export default Catalog;
