import React from "react";
import {filmPropTypes} from "../../prop-types/film";

const FilmOverview = ({film}) => {
  const {rating, scoresCount, description, director, starring} = film;


  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">Very good</span>
          <span className="movie-rating__count">{scoresCount}</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{description}</p>

        <p className="movie-card__director"><strong>Director: {director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {starring.join(`, `)}</strong></p>
      </div>

    </>
  );
};

FilmOverview.propTypes = {
  film: filmPropTypes
};

export default FilmOverview;
