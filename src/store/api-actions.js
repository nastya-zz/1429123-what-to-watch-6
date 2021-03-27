import {ActionCreator} from "./action";
import {AppRoute, AuthorizationStatus, DEFAULT_GENRE} from "../constants/common";
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

export const fetchReviewList = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => {
      dispatch(ActionCreator.loadReviewList(data));
    })
);

export const fetchFilmById = (id) => (dispatch, _getState, api) => (
  api.get(`/films/${id}`)
    .then(({data}) => {
      const adaptedFilm = getAdaptedFilm(data);

      dispatch(ActionCreator.loadFilmById(adaptedFilm));
      dispatch(fetchReviewList(id));
    })
);

export const postFilmReview = (id, {comment, rating}) => (dispatch, _getState, api) => {
  dispatch(ActionCreator.isReviewUploaded(false));

  return api.post(`/comments/${id}`, {comment})
    .then(() => {
      dispatch(ActionCreator.isReviewUploaded(true));
      dispatch(ActionCreator.redirectToRoute(`${AppRoute.FILM}/${id}`));
      return Promise.resolve();
    }).catch(() => {
      dispatch(ActionCreator.isReviewUploaded(true));
    });
};

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
      dispatch(ActionCreator.redirectToRoute(`/`));
    })
    .catch((error) => {
      throw error;
    })
);
