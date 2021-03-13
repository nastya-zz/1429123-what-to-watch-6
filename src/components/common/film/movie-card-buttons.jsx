import React from "react";
import PropTypes from "prop-types";
import {AppRoute} from "../../../constants/common";

const MovieCardButtons = ({children, filmId, history}) => {

  return (
    <div className="movie-card__buttons">
      <button onClick={() => history.push(`${AppRoute.PLAYER}/${filmId}`)} className="btn btn--play movie-card__button" type="button">
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

      {children}
    </div>
  );
};

MovieCardButtons.propTypes = {
  children: PropTypes.node,
  filmId: PropTypes.number,
  history: PropTypes.object
};

export default MovieCardButtons;
