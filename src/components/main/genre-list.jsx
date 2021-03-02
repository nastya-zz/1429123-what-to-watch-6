import React from "react";
import PropTypes from "prop-types";
import GenreListItem from "./genre-list-item";
import {connect} from 'react-redux';
import {ActionCreator} from "../../store/action";

const GenreList = (props) => {
  const {genres, genre, onChangeGenre} = props;

  return (
    <ul className="catalog__genres-list">
      {genres.map((g, i) => <GenreListItem key={g + i} genre={g} isActive={genre === g} onChangeGenre={onChangeGenre}/>)}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  genre: state.genre,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeGenre(type) {
    dispatch(ActionCreator.setGenre(type));
    dispatch(ActionCreator.resetMainFilmsCount());
  },
});

GenreList.propTypes = {
  genre: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChangeGenre: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
