import {createReducer} from "@reduxjs/toolkit";
import {DEFAULT_GENRE, FilmCount} from "../../constants/common";
import {resetMainFilmsCount, setGenre, setGenres, showMoreFilms} from "../action";


const initialState = {
  genres: [DEFAULT_GENRE],
  activeGenre: DEFAULT_GENRE,
  mainPageFilmCount: FilmCount.MAIN_PAGE,
};

export const main = createReducer(initialState, (builder) => {
  builder.addCase(setGenre, (state, action) => {
    return {
      ...state,
      activeGenre: action.payload,
    };
  });
  builder.addCase(showMoreFilms, (state) => {
    return {
      ...state,
      mainPageFilmCount: state.mainPageFilmCount + FilmCount.MAIN_PAGE
    };
  });
  builder.addCase(resetMainFilmsCount, (state) => {
    return {
      ...state,
      mainPageFilmCount: FilmCount.MAIN_PAGE
    };
  });
  builder.addCase(setGenres, (state, action) => {
    return {
      ...state,
      genres: action.payload
    };
  });
});
