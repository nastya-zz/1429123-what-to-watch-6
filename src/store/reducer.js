import {ActionType} from "./action";
import {FilmCount, AuthorizationStatus, DEFAULT_GENRE} from "../constants/common";


const initialState = {
  films: [],
  genres: [DEFAULT_GENRE],
  filteredFilmsByGenre: [],
  activeGenre: DEFAULT_GENRE,
  mainPageFilmCount: FilmCount.MAIN_PAGE,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  user: null,
  isFilmsLoaded: false,
  selectedFilm: null,
  selectedFilmReviewList: [],
  isSelectedFilmLoaded: false,
  isReviewUploaded: true,
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return {
        ...state,
        films: action.payload,
        isFilmsLoaded: true
      };
    case ActionType.LOAD_FILM_BY_ID:
      return {
        ...state,
        selectedFilm: action.payload,
        isSelectedFilmLoaded: true
      };
    case ActionType.LOAD_REVIEW_LIST:
      return {
        ...state,
        selectedFilmReviewList: action.payload,
      };
    case ActionType.SET_GENRES:
      return {
        ...state,
        genres: action.payload
      };
    case ActionType.SET_GENRE:
      return {
        ...state,
        activeGenre: action.payload,
        filteredFilmsByGenre: action.payload === DEFAULT_GENRE ? state.films : state.films.filter((film) => film.genre === action.payload)
      };
    case ActionType.SHOW_MORE_FILMS:
      return {
        ...state,
        mainPageFilmCount: state.mainPageFilmCount + FilmCount.MAIN_PAGE
      };
    case ActionType.RESET_MAIN_FILMS_COUNT:
      return {
        ...state,
        mainPageFilmCount: FilmCount.MAIN_PAGE
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case ActionType.IS_REVIEW_UPLOADED:
      return {
        ...state,
        isFilmsLoaded: action.payload,
      };
    case ActionType.IS_SELECTED_FILM_BY_ID_LOADEE:
      return {
        ...state,
        isSelectedFilmLoaded: action.payload,
      };
  }

  return state;
};


export {reducer};
