export const ActionType = {
  SET_GENRE: `main/setGenre`,
  SHOW_MORE_FILMS: `main/showMoreFilms`,
  RESET_MAIN_FILMS_COUNT: `main/resetMainFilmsCount`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  SET_USER: `user/setUser`,
  LOAD_FILMS: `data/loadFilms`,
  SET_GENRES: `data/setGenres`,
  REDIRECT_TO_ROUTE: `route/redirectToRoute`,
  LOAD_FILM_BY_ID: `film/loadFilmById`,
  IS_SELECTED_FILM_BY_ID_LOADEE: `film/isSelectedFilmByIdLoaded`,
  LOAD_REVIEW_LIST: `film/loadReviewList`,
  IS_REVIEW_UPLOADED: `add-review/isReviewUploaded`
};


export const ActionCreator = {
  setGenre: (type) => ({
    type: ActionType.SET_GENRE,
    payload: type,
  }),
  showMoreFilms: () => ({
    type: ActionType.SHOW_MORE_FILMS,
  }),
  resetMainFilmsCount: () => ({
    type: ActionType.RESET_MAIN_FILMS_COUNT
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  setUser: (user) => ({
    type: ActionType.SET_USER,
    payload: user,
  }),
  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films
  }),
  loadFilmById: (film) => ({
    type: ActionType.LOAD_FILM_BY_ID,
    payload: film
  }),
  loadReviewList: (reviewList) => ({
    type: ActionType.LOAD_REVIEW_LIST,
    payload: reviewList
  }),
  setGenres: (genres) => ({
    type: ActionType.SET_GENRES,
    payload: genres
  }),
  redirectToRoute: (route) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: route
  }),
  isReviewUploaded: (flag) => ({
    type: ActionType.IS_REVIEW_UPLOADED,
    payload: flag
  }),
  isSelectedFilmByIdLoaded: (flag) => ({
    type: ActionType.IS_SELECTED_FILM_BY_ID_LOADEE,
    payload: flag
  })
};
