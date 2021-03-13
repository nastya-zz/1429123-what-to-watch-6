import React from 'react';
import Header from "../common/header/header";
import Footer from "../common/footer/footer";
import Catalog from "./catalog";
import {AppRoute} from "../../constants/common";
import PropTypes from "prop-types";
import MovieCardButtons from "../common/film/movie-card-buttons";
import {Link} from "react-router-dom";

const Main = ({history}) => {
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

            <MovieCardButtons filmId={1} history={history} />
          </div>
        </div>
      </div>
    </section>

    <div className="page-content">
      <Catalog />
      <Footer />
    </div>
  </React.Fragment>
  );
};

Main.propTypes = {
  history: PropTypes.object.isRequired
};

export default Main;
