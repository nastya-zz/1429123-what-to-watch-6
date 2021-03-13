import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {filmPropTypes} from "../../../prop-types/film";
import VideoPlayer from "./video-player";
import {AppRoute} from "../../../constants/common";


const FilmItem = (props) => {
  const {film, handleHover, isPlaying} = props;
  const {previewImage, id, name, previewVideoLink} = film;

  return (
    <>
      <article
        onMouseEnter={()=>handleHover(id)}
        onMouseLeave={()=>handleHover(null)}
        className="small-movie-card catalog__movies-card"
      >
        <div className="small-movie-card__image">
          <VideoPlayer
            isPlaying={isPlaying}
            previewImage={previewImage}
            previewVideoLink={previewVideoLink}
            preload="none"
            muted width="280" height="175"
          />
        </div>
        <h3 className="small-movie-card__title">
          <Link to={`${AppRoute.FILM}/${id}`} className="small-movie-card__link">{name}</Link>
        </h3>
      </article>
    </>
  );
};

FilmItem.propTypes = {
  film: filmPropTypes,
  handleHover: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired
};

export default FilmItem;
