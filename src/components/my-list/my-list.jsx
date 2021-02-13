import React from "react";
import Header from "../common/header";
import Footer from "../common/footer";
import PropTypes from "prop-types";
import {shapeFilm} from "../../mocks/films";
import FilmList from "../main/film-list";


const MyList = ({films}) => {
  return (
    <>
      <div className="user-page">
        <Header headerClass={`page-header user-page__head`} title={`My list`} />

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <FilmList films={films} />
        </section>

        <Footer />
      </div>
    </>
  );
};

MyList.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape(shapeFilm)
  ).isRequired
};

export default MyList;
