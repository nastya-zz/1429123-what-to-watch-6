import React from 'react';
import MovieCardButtons from "../common/film/movie-card-buttons";
import {useDispatch, useSelector} from "react-redux";
import {addToFavoriteList, fetchPromoFilm} from "../../store/api-actions";
import PropTypes from "prop-types";
import Header from "../common/header/header";
import {FavoriteFilmStatus} from "../../constants/common";

const Promo = ({history}) => {
  const dispatch = useDispatch();
  const promoFilm = useSelector(({FILM}) => FILM.promoFilm);

  const handleMyListBtnClick = async () => {
    const status = promoFilm.isFavorite ? FavoriteFilmStatus.REMOVE : FavoriteFilmStatus.ADD;

    await dispatch(addToFavoriteList(promoFilm.id, status));
    dispatch(fetchPromoFilm());
  };


  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={promoFilm.backgroundImage} alt={promoFilm.name}/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header headerClass={`page-header movie-card__head`} history={history}/>

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={promoFilm.posterImage} alt={promoFilm.name} width="218" height="327"/>
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{promoFilm.name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{promoFilm.genre}</span>
              <span className="movie-card__year">{promoFilm.released}</span>
            </p>

            <MovieCardButtons film={promoFilm} history={history} onBtnClick={handleMyListBtnClick} />
          </div>
        </div>
      </div>

    </section>
  );
};

Promo.propTypes = {
  history: PropTypes.object.isRequired
};


export default Promo;
