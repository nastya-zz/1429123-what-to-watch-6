import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  SET_GENRE: `main/setGenre`,
  SHOW_MORE_FILMS: `main/showMoreFilms`,
  RESET_MAIN_FILMS_COUNT: `main/resetMainFilmsCount`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  SET_USER: `user/setUser`,
  LOAD_FILMS: `film/loadFilms`,
  SET_GENRES: `main/setGenres`,
  REDIRECT_TO_ROUTE: `route/redirectToRoute`,
  LOAD_FILM_BY_ID: `film/loadFilmById`,
  SET_SELECTED_FILM_BY_ID_LOADED: `film/isSelectedFilmByIdLoaded`,
  LOAD_REVIEW_LIST: `film/loadReviewList`,
  SET_REVIEW_UPLOADED: `film/isReviewUploaded`
};


export const setGenre = createAction(ActionType.SET_GENRE, (type) => ({
  payload: type
}));
export const showMoreFilms = createAction(ActionType.SHOW_MORE_FILMS);

export const resetMainFilmsCount = createAction(ActionType.RESET_MAIN_FILMS_COUNT);

export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => ({
  payload: status
}));
export const loadFilms = createAction(ActionType.LOAD_FILMS, (films) => ({
  payload: films
}));
export const setUser = createAction(ActionType.SET_USER, (user) => ({
  payload: user
}));
export const loadFilmById = createAction(ActionType.LOAD_FILM_BY_ID, (film) => ({
  payload: film
}));
export const loadReviewList = createAction(ActionType.LOAD_REVIEW_LIST, (reviewList) => ({
  payload: reviewList
}));
export const setGenres = createAction(ActionType.SET_GENRES, (genres) => ({
  payload: genres
}));
export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (route) => ({
  payload: route
}));
export const setReviewUploaded = createAction(ActionType.SET_REVIEW_UPLOADED, (flag) => ({
  payload: flag
}));
export const setSelectedFilmByIdLoaded = createAction(ActionType.SET_SELECTED_FILM_BY_ID_LOADED, (flag) => ({
  payload: flag
}));

