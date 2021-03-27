import React from "react";
import {useSelector} from "react-redux";
import {formatDate} from "../../utils/film";

const FilmReviews = () => {
  const commentList = useSelector((state) => state.selectedFilmReviewList);

  return (
    <>
      <div className="movie-card__reviews movie-card__row">
        <div className="movie-card__reviews-col">
          { commentList.length ?
            commentList.map((comment) => (
              <div className="review" key={comment.id}>
                <blockquote className="review__quote">
                  <p className="review__text">{comment.comment}</p>

                  <footer className="review__details">
                    <cite className="review__author">{comment.user.name}</cite>
                    <time className="review__date" dateTime="2016-12-24">{formatDate(comment.date)}</time>
                  </footer>
                </blockquote>

                <div className="review__rating">{comment.rating}</div>
              </div>
            ))
            :
            `No comments.`
          }
        </div>
      </div>
    </>
  );
};


export default FilmReviews;
