import {ActionCreator} from "./action";
import {AuthorizationStatus, DEFAULT_GENRE} from "../constants/common";

export const fetchFilmList = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => {
      const genres = [DEFAULT_GENRE, ...new Set(data.map((film) => film.genre))];

      dispatch(ActionCreator.loadFilms(data));
      dispatch(ActionCreator.setGenres(genres));
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
);
