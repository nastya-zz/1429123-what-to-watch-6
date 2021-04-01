import {createReducer} from "@reduxjs/toolkit";
import {setReviewUploaded, setSelectedFilmByIdLoaded, loadFilmById, loadFilms, loadReviewList} from "../action";

const initialState = {
  films: [],
  isFilmsLoaded: false,
  selectedFilm: null,
  selectedFilmReviewList: [],
  isSelectedFilmLoaded: false,
  isReviewUploaded: true,
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
  builder.addCase(setReviewUploaded, (state, action) => {
    return {
      ...state,
      isReviewUploaded: action.payload,
    };
  });
});
