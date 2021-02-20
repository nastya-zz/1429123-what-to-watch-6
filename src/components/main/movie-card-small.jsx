import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {filmPropTypes} from "../../prop-types/film";


const MovieCardSmall = (props) => {
  const {film, onHover} = props;
  const {previewImage: img, id, name} = film;

  return (
    <>
      <article
        onMouseEnter={()=>onHover(id)}
        onMouseLeave={()=>onHover(null)}
        className="small-movie-card catalog__movies-card"
      >
        <div className="small-movie-card__image">
          <img src={img} alt={name} width="280" height="175" />
        </div>
        <h3 className="small-movie-card__title">
          <Link to={`/films/${id}`} className="small-movie-card__link">{name}</Link>
        </h3>
      </article>
    </>
  );
};

MovieCardSmall.propTypes = {
  film: filmPropTypes,
  onHover: PropTypes.func.isRequired
};

export default MovieCardSmall;
