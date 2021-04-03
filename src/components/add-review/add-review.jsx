import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import Header from "../common/header/header";
import {filmPropTypes} from "../../prop-types/film";
import {useDispatch, useSelector} from "react-redux";
import {postFilmReview} from "../../store/api-actions";

const CommentLength = {
  MIN: 50,
  MAX: 400
};

const AddReview = ({film, id}) => {
  const dispatch = useDispatch();
  const RATING_STARS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [form, setForm] = useState({
    rating: `10`,
    comment: ``,
  });

  const [isSubmitBlocked, setSubmitBlocked] = useState(true);
  const [errorMessage, setErrorMessage] = useState(``);
  const isReviewUploaded = useSelector(({FILM}) => FILM.isReviewUploaded);

  const handleChangeForm = (evt) => {
    evt.preventDefault();

    const {name, value} = evt.target;
    setForm({...form, [name]: value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const review = {
      comment: form.comment,
      rating: +form.rating
    };

    await dispatch(postFilmReview(id, review));
  };

  useEffect(() => {
    const isValidLength = form.comment.length >= CommentLength.MIN && form.comment.length <= CommentLength.MAX;

    if (isValidLength && form.rating) {
      setSubmitBlocked(false);
    } else {
      setSubmitBlocked(true);
    }
  }, [form.comment, form.rating]);

  useEffect(() => {
    setErrorMessage(`Sorry, something went wrong. Please try again later`);
  }, [isReviewUploaded]);

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
          <form onSubmit={handleSubmit} onInput={handleChangeForm} className="add-review__form">
            {errorMessage && <p>{errorMessage}</p>}

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
                <button disabled={isSubmitBlocked} className="add-review__btn" type="submit">Post</button>
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
  film: filmPropTypes,
  id: PropTypes.string,
};


export default AddReview;
