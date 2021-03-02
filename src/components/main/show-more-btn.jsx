import React from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {ActionCreator} from "../../store/action";
import {filmsPropTypes} from "../../prop-types/film";

const ShowMoreBtn = (props) => {
  const {onClickBtn, mainPageFilmCount, filteredFilmsByGenre} = props;

  if (filteredFilmsByGenre.length <= mainPageFilmCount) {
    return null;
  }
  return (
    <div className="catalog__more">
      <button className="catalog__button" onClick={onClickBtn} type="button">Show more</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  mainPageFilmCount: state.mainPageFilmCount,
  filteredFilmsByGenre: state.filteredFilmsByGenre
});

const mapDispatchToProps = (dispatch) => ({
  onClickBtn() {
    dispatch(ActionCreator.showMoreFilms());
  },
});

ShowMoreBtn.propTypes = {
  filteredFilmsByGenre: filmsPropTypes,
  mainPageFilmCount: PropTypes.number.isRequired,
  onClickBtn: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowMoreBtn);
