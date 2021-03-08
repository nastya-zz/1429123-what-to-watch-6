import React from "react";
import PropTypes from "prop-types";
import {Link, useParams, useRouteMatch} from "react-router-dom";

// todo: write common component
const FilmCardWrap = (props) => {
  const {film} = prop;
  const {id} = useParams();
  const {path, url} = useRouteMatch();

  return (
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
  );
};
