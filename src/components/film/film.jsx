import React from "react";
import {Link, Route, Switch, useHistory, useParams, useRouteMatch} from 'react-router-dom';
import Header from "../common/header";
import Footer from "../common/footer";
import FilmOverview from "./film-overview";
import FilmDetails from "./film-details";
import FilmReviews from "./film-reviews";
import {findFilmById} from "../../utils/film";
import {filmsPropTypes} from "../../prop-types/film";
import FilmList from "../main/film-list";

const Film = ({films}) => {
  const {id} = useParams();
  const {path, url} = useRouteMatch();
  const film = findFilmById(id, films);
  const history = useHistory();


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
                <button onClick={() => history.push(`/player/${id}`)} className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button onClick={() => history.push(`/mylist`)} className="btn btn--list movie-card__button" type="button">
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

            <div className="movie-card__desc">
              <nav className="movie-nav movie-card__nav">
                <ul className="movie-nav__list">
                  <li className="movie-nav__item movie-nav__item--active">
                    <Link to={`${url}/`} className="movie-nav__link">Overview</Link>
                  </li>
                  <li className="movie-nav__item">
                    <Link to={`${url}/details`} className="movie-nav__link">Details</Link>
                  </li>
                  <li className="movie-nav__item">
                    <Link to={`${url}/reviews`} className="movie-nav__link">Reviews</Link>
                  </li>
                </ul>
              </nav>
              <Switch>
                <Route exact path={path}>
                  <FilmOverview film={film} />
                </Route>
                <Route exact path={`${path}/details`}>
                  <FilmDetails film={film} />
                </Route>
                <Route exact path={`${path}/reviews`}>
                  <FilmReviews film={film} />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmList films={films.slice(0, 4)}/>
        </section>

        <Footer />
      </div>
    </>
  );
};

Film.propTypes = {
  films: filmsPropTypes
};

export default Film;
