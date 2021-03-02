import React from 'react';
import PropTypes from "prop-types";
import GenreList from "./genre-list";
import Header from "../common/header/header";
import Footer from "../common/footer/footer";
import {useHistory} from "react-router-dom";
import {filmsPropTypes} from "../../prop-types/film";
import FilmList from "../common/film/film-list";

const Main = (props) => {
  const {genres, films} = props;
  const history = useHistory();


  return (<React.Fragment>
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header headerClass={`page-header movie-card__head`} />

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218"
              height="327"/>
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">The Grand Budapest Hotel</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">Drama</span>
              <span className="movie-card__year">2014</span>
            </p>

            <div className="movie-card__buttons">
              <button onClick={()=>history.push(`/player/1`)} className="btn btn--play movie-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <button onClick={()=>history.push(`/mylist`)} className="btn btn--list movie-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <GenreList genres={genres}/>

        <FilmList films={films} />

        <div className="catalog__more">
          <button className="catalog__button" type="button">Show more</button>
        </div>
      </section>

      <Footer />
    </div>
  </React.Fragment>
  );
};

Main.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  films: filmsPropTypes
};

export default Main;
