import {films} from "../mocks/films";
import {Genre} from "../constants/genres";
import {ActionType} from "./action";

const initialState = {
  films,
  genre: Genre.ALL
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
