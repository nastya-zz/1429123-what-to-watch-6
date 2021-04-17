import React from "react";
import PropTypes from "prop-types";
import {AppRoute} from "../../../constants/common";
import {filmPropTypes} from "../../../prop-types/film";

const MovieCardButtons = ({children, film, history, onBtnClick}) => {

  return (
    <div className="movie-card__buttons">
      <button onClick={() => history.push(`${AppRoute.PLAYER}/${film.id}`)} className="btn btn--play movie-card__button" type="button">
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </button>

      <button onClick={() => onBtnClick()} className="btn btn--list movie-card__button" type="button">
        {film.isFavorite ? <RemoveFromMyList/> : <AddToMyListButton/>}
      </button>

      {children}
    </div>
  );
};

const RemoveFromMyList = () => {
  return (
    <>
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref="#in-list"></use>
      </svg>
      <span>My list</span>
    </>
  );
};

const AddToMyListButton = () => {
  return (
    <>
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref="#add"></use>
      </svg>
      <span>My list</span>
    </>
  );
};

MovieCardButtons.propTypes = {
  children: PropTypes.node,
  film: filmPropTypes,
  history: PropTypes.object,
  onBtnClick: PropTypes.func
};

export default MovieCardButtons;
