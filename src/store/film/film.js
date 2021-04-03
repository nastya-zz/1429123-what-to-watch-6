import {createReducer} from "@reduxjs/toolkit";
import {setShowReviewErrorMsg, setSelectedFilmByIdLoaded, loadFilmById, loadFilms, loadReviewList} from "../action";

const initialState = {
  films: [],
  isFilmsLoaded: false,
  selectedFilm: null,
  selectedFilmReviewList: [],
  isSelectedFilmLoaded: false,
  showReviewErrorMsg: false,
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
});
