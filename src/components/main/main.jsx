import React from 'react';
import Header from "../common/header/header";
import Footer from "../common/footer/footer";
import Catalog from "./catalog";
import PropTypes from "prop-types";
import MovieCardButtons from "../common/film/movie-card-buttons";
import {useDispatch, useSelector} from "react-redux";
import {addToFavoriteList, fetchFilmList} from "../../store/api-actions";

const Main = ({history}) => {
  const film = useSelector(({FILM}) => FILM.films[0]);
  const dispatch = useDispatch();

  const handleMyListBtnClick = async () => {
    const status = film.isFavorite ? 0 : 1;
    await dispatch(addToFavoriteList(film.id, status));
    dispatch(fetchFilmList());
  };


  return (<React.Fragment>
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header headerClass={`page-header movie-card__head`} history={history}/>

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

            <MovieCardButtons film={film} history={history} onBtnClick={handleMyListBtnClick} />
          </div>
        </div>
      </div>
    </section>

    <div className="page-content">
      <Catalog history={history} />
      <Footer />
    </div>
  </React.Fragment>
  );
};

Main.propTypes = {
  history: PropTypes.object.isRequired
};

export default Main;
