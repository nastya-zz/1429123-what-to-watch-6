import React from "react";
import {Link, useParams, useRouteMatch} from 'react-router-dom';
import Header from "../common/header/header";
import Footer from "../common/footer/footer";
import {findFilmById} from "../../utils/film";
import FilmList from "../common/film/film-list";
import FilmTabs from "./film-tabs";
import {AppRoute, FilmCount} from "../../constants/common";
import {useSelector} from "react-redux";
import PropTypes from "prop-types";


const Film = ({history}) => {
  const {id} = useParams();
  const {url} = useRouteMatch();
  const films = useSelector((state) => state.films);
  const film = findFilmById(id, films);


  return (
    <>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={film.backgroundImage} alt="The Grand Budapest Hotel"/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header headerClass={`page-header movie-card__head`}/>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{film.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{film.genre}</span>
                <span className="movie-card__year">{film.released}</span>
              </p>

              <div className="movie-card__buttons">
                <button onClick={() => history.push(`${AppRoute.PLAYER}/${id}`)} className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button onClick={() => history.push(`${AppRoute.MY_LIST}`)} className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <Link to={`${url}/review`} className="btn movie-card__button">Add review</Link>
              </div>
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

          <FilmList films={films.slice(0, FilmCount.MY_LIST)}/>
        </section>

        <Footer />
      </div>
    </>
  );
};

Film.propTypes = {
  history: PropTypes.object.isRequired
};

export default Film;
