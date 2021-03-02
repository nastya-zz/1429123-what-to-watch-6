import {films} from "../mocks/films";
import {ActionType} from "./action";

export const genres = [`All genres`, ...new Set(films.map((film) => film.genre))];

const initialState = {
  films,
  genre: genres[0]
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_GENRE:
      return {
        ...state,
        genre: action.payload
      };
  }

  return state;
};


export {reducer};
