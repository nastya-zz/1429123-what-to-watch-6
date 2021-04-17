import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {postFilmReview} from "../../store/api-actions";
import PropTypes from "prop-types";
import StarCheckbox from "./star-checkbox";

const CommentLength = {
  MIN: 50,
  MAX: 400
};


const AddReviewForm = ({id}) => {
  const dispatch = useDispatch();
  const RATING_STARS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [form, setForm] = useState({
    rating: `10`,
    comment: ``,
  });

  const [isSubmitBlocked, setSubmitBlocked] = useState(true);
  const [errorMessage, setErrorMessage] = useState(``);
  const showReviewErrorMsg = useSelector(({FILM}) => FILM.showReviewErrorMsg);

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
    if (showReviewErrorMsg) {
      setErrorMessage(`Sorry, something went wrong. Please try again later`);
    }
  }, [showReviewErrorMsg]);

  return (
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

  );
};

AddReviewForm.propTypes = {
  id: PropTypes.number.isRequired,
};

export default AddReviewForm;
