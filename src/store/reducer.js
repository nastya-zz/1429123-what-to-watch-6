import {films} from "../mocks/films";
import {ActionType} from "./action";
import {FilmCount} from "../constants/common";

export const genres = [`All genres`, ...new Set(films.map((film) => film.genre))];

const initialState = {
  films,
  genres,
  filteredFilmsByGenre: films,
  genre: genres[0],
  mainPageFilmCount: FilmCount.MAIN_PAGE
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_GENRE:
      return {
        ...state,
        genre: action.payload,
        filteredFilmsByGenre: action.payload === `All genres` ? state.films : state.films.filter((film) => film.genre === action.payload)
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
  }

  return state;
};


export {reducer};
