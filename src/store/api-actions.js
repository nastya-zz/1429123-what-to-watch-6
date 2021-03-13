import {ActionCreator} from "./action";
import {AuthorizationStatus, DEFAULT_GENRE} from "../constants/common";
import {getAdaptedFilm} from "../utils/adapters";

export const fetchFilmList = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => {
      const genres = [DEFAULT_GENRE, ...new Set(data.map((film) => film.genre))];
      const adaptedFilmList = data.map((film) => getAdaptedFilm(film));

      dispatch(ActionCreator.loadFilms(adaptedFilmList));
      dispatch(ActionCreator.setGenres(genres));
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then((response) => {
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(ActionCreator.setUser(response.data));
    }).catch(() => {})
);

export const login = ({email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then((response) => {
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(ActionCreator.setUser(response.data));
    })
    .then(() => dispatch(ActionCreator.redirectToRoute(`/`)))
    .catch((error) => {
      throw error;
    })
);
