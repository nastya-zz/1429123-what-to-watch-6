export const ActionType = {
  SET_GENRE: `main/setGenre`,
  SHOW_MORE_FILMS: `main/showMoreFilms`,
  RESET_MAIN_FILMS_COUNT: `main/resetMainFilmsCount`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  LOAD_FILMS: `data/loadFilms`,
  SET_GENRES: `data/setGenres`
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
  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films
  }),
  setGenres: (genres) => ({
    type: ActionType.SET_GENRES,
    payload: genres
  })
};
