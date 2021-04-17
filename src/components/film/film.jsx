import React from "react";
import {Link, useRouteMatch} from 'react-router-dom';
import Header from "../common/header/header";
import Footer from "../common/footer/footer";
import FilmList from "../common/film/film-list";
import FilmTabs from "./film-tabs";
import {AppRoute, AuthorizationStatus, FavoriteFilmStatus, FilmCount} from "../../constants/common";
import {useDispatch, useSelector} from "react-redux";
import PropTypes from "prop-types";
import MovieCardButtons from "../common/film/movie-card-buttons";
import {filmPropTypes} from "../../prop-types/film";
import {filmsLikeThisSelector} from "../../store/film/film-selector";
import {addToFavoriteList, fetchFilmById} from "../../store/api-actions";


const Film = ({history, film}) => {
  const dispatch = useDispatch();
  const {url} = useRouteMatch();
  const store = useSelector((state) => state);
  const authorizationStatus = useSelector(({USER}) => USER.authorizationStatus);
  const moreLikeThisList = filmsLikeThisSelector(store);

  const handleMyListBtnClick = async () => {
    const status = film.isFavorite ? FavoriteFilmStatus.REMOVE : FavoriteFilmStatus.ADD;

    await dispatch(addToFavoriteList(film.id, status));
    dispatch(fetchFilmById(film.id));
  };

  return (
    <>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header headerClass={`page-header movie-card__head`} history={history}/>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{film.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{film.genre}</span>
                <span className="movie-card__year">{film.released}</span>
              </p>

              <MovieCardButtons film={film} history={history} onBtnClick={handleMyListBtnClick}>
                {authorizationStatus === AuthorizationStatus.AUTH && <Link to={`${url}${AppRoute.ADD_REVIEW}`} className="btn movie-card__button">Add review</Link>}
              </MovieCardButtons>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={film.posterImage} alt={film.name} width="218"
                height="327"/>
            </div>

            <FilmTabs film={film}/>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmList films={moreLikeThisList.slice(0, FilmCount.MORE_LIKE)} history={history}/>
        </section>

        <Footer />
      </div>
    </>
  );
};

Film.propTypes = {
  history: PropTypes.object.isRequired,
  film: filmPropTypes,
  id: PropTypes.string,
};

export default Film;
