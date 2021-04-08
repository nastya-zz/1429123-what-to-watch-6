import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import Header from "../common/header/header";
import {filmPropTypes} from "../../prop-types/film";
import AddReviewForm from "./add-review-form";

const AddReview = ({film, id}) => {

  return (
    <>
      <section className="movie-card movie-card--full">
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header headerClass={`page-header`}>
            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to={`/films/${id}/`} className="breadcrumbs__link">{film.name}</Link>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>
          </Header>

          <div className="movie-card__poster movie-card__poster--small">
            <img src={film.posterImage} alt={film.name} width="218"
              height="327"/>
          </div>
        </div>

        <AddReviewForm id={id}/>
      </section>
    </>
  );
};

AddReview.propTypes = {
  film: filmPropTypes,
  id: PropTypes.string,
};


export default AddReview;
