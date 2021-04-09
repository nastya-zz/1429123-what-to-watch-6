import {createReducer} from "@reduxjs/toolkit";
import {
  loadFavoriteList,
  loadFilmById,
  loadFilms,
  loadReviewList,
  setSelectedFilmByIdLoaded,
  setShowReviewErrorMsg,
} from "../action";

const initialState = {
  films: [],
  isFilmsLoaded: false,
  selectedFilm: null,
  selectedFilmReviewList: [],
  isSelectedFilmLoaded: false,
  showReviewErrorMsg: false,
  myList: [],
};

export const film = createReducer(initialState, (builder) => {
  builder.addCase(loadFilms, (state, action) => {
    return {
      ...state,
      films: action.payload,
      isFilmsLoaded: true
    };
  });
  builder.addCase(loadFilmById, (state, action) => {
    return {
      ...state,
      selectedFilm: action.payload,
      isSelectedFilmLoaded: true
    };
  });
  builder.addCase(loadReviewList, (state, action) => {
    return {
      ...state,
      selectedFilmReviewList: action.payload,
    };
  });
  builder.addCase(setSelectedFilmByIdLoaded, (state, action) => {
    return {
      ...state,
      isSelectedFilmLoaded: action.payload,
    };
  });
  builder.addCase(setShowReviewErrorMsg, (state, action) => {
    return {
      ...state,
      showReviewErrorMsg: action.payload,
    };
  });
  builder.addCase(loadFavoriteList, (state, action) => {
    return {
      ...state,
      myList: action.payload,
    };
  });
});
