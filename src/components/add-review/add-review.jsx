import React, {useState} from "react";
import PropTypes from "prop-types";
import {Link, useParams} from "react-router-dom";
import {findFilmById} from "../../utils/film";
import {filmsPropTypes} from "../../prop-types/film";
import Header from "../common/header/header";


const AddReview = ({films}) => {
  const {id} = useParams();
  const film = findFilmById(id, films);
  const RATING_STARS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [form, setForm] = useState({
    rating: ``,
    comment: ``,
    date: ``
  });

  const handleChangeForm = (evt) => {
    evt.preventDefault();

    const {name, value} = evt.target.name;
    setForm({...form, [name]: value, date: new Date().toLocaleString()});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // todo: implement submit form
  };

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

        <div className="add-review">
          <form action="#" onSubmit={handleSubmit} onInput={handleChangeForm} className="add-review__form">
            <div className="rating">
              <div className="rating__stars">
                {RATING_STARS.map((i) => <StarCheckbox key={`i-${i}`} i={i} active={form.rating}/>)}
              </div>
            </div>

            <div className="add-review__text">
              <textarea className="add-review__textarea"
                name="comment"
                id="review-text"
                placeholder="Review text" />
              <div className="add-review__submit">
                <button className="add-review__btn" type="submit">Post</button>
              </div>

            </div>
          </form>
        </div>
      </section>
    </>
  );
};

const StarCheckbox = ({i, active}) => {
  active = parseInt(active, 10);
  return (
    <>
      <input
        className="rating__input" id={`star-${i}`}
        type="radio"
        name="rating"
        value={i}
        defaultChecked={active === i}
      />
      <label className="rating__label" htmlFor={`star-${i}`}>Rating {i}</label>
    </>
  );
};

StarCheckbox.propTypes = {
  i: PropTypes.number.isRequired,
  active: PropTypes.string.isRequired
};

AddReview.propTypes = {
  films: filmsPropTypes
};

export default AddReview;
