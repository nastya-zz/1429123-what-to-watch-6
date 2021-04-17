import {
  loadFavoriteList,
  loadFilmById,
  loadFilms,
  loadReviewList,
  redirectToRoute,
  requireAuthorization,
  setGenre,
  setGenres, setPromoFilm,
  setShowReviewErrorMsg,
  setUser,
} from "./action";
import {AppRoute, AuthorizationStatus, DEFAULT_GENRE} from "../constants/common";
import {getAdaptedFilm} from "../utils/adapters";

export const fetchFilmList = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => {
      const genres = [DEFAULT_GENRE, ...new Set(data.map((film) => film.genre))];
      const adaptedFilmList = data.map((film) => getAdaptedFilm(film));

      dispatch(loadFilms(adaptedFilmList));
      dispatch(setGenres(genres));
      dispatch(setGenre(DEFAULT_GENRE));
    })
);

export const fetchFavoriteFilmList = () => (dispatch, _getState, api) => (
  api.get(`/favorite`)
    .then(({data}) => {
      const adaptedFilmList = data.map((film) => getAdaptedFilm(film));

      dispatch(loadFavoriteList(adaptedFilmList));
    })
);

export const addToFavoriteList = (id, status) => (dispatch, _getState, api) => (
  api.post(`/favorite/${id}/${status}`)
    .then(({data}) => {
      return data;
    })
);

export const fetchReviewList = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => {
      dispatch(loadReviewList(data));
    })
);
export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(`/films/promo`)
    .then(({data}) => {
      const adaptedFilm = getAdaptedFilm(data);
      dispatch(setPromoFilm(adaptedFilm));
    })
);

export const fetchFilmById = (id) => (dispatch, _getState, api) => (
  api.get(`/films/${id}`)
    .then(({data}) => {
      const adaptedFilm = getAdaptedFilm(data);

      dispatch(loadFilmById(adaptedFilm));
      dispatch(fetchReviewList(id));
    })
);

export const postFilmReview = (id, {comment, rating}) => (dispatch, _getState, api) => {
  dispatch(setShowReviewErrorMsg(false));

  return api.post(`/comments/${id}`, {comment, rating})
    .then(() => {
      dispatch(setShowReviewErrorMsg(false));
      dispatch(redirectToRoute(`${AppRoute.FILM}/${id}`));
      return Promise.resolve();
    }).catch(() => {
      dispatch(setShowReviewErrorMsg(true));
    });
};

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then((response) => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(setUser(response.data));
    }).catch(() => {})
);

export const login = ({email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then((response) => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(setUser(response.data));
      dispatch(redirectToRoute(`/`));
    })
    .catch((error) => {
      throw error;
    })
);
