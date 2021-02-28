export const ActionType = {
  SET_GENRE: `film/setGenre`
};


export const ActionCreator = {
  setGenre: (type) => ({
    type: ActionType.SET_GENRE,
    payload: type,
  }),
};
