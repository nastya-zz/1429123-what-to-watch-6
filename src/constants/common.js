export const PLAYING_DELAY = 1000;
export const DEFAULT_GENRE = `All genres`;
export const GENRE_MAIN_COUNT = 9;
export const FilmCount = {
  MAIN_PAGE: 8,
  MORE_LIKE: 4
};

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const ApiRoute = {
  FILMS: `/films`,
  FAVORITE: `/favorite`,
  FILM_PROMO: `/films/promo`,
  LOGIN: `/login`,
  COMMENTS: `/comments`,
};

export const AppRoute = {
  MAIN: `/`,
  LOGIN: `/login`,
  FILM: `/films`,
  ADD_REVIEW: `/review`,
  MY_LIST: `/mylist`,
  PLAYER: `/player`,
};

export const Tab = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`
};

export const FavoriteFilmStatus = {
  REMOVE: 0,
  ADD: 1
};

const FilmRating = {
  BAD: `Bad`,
  NORMAL: `Normal`,
  GOOD: `Good`,
  VERY_GOOD: `Very good`,
  AWESOME: `Awesome`
};

const FilmRatingRules = [
  {rating: FilmRating.BAD, from: 0, to: 3},
  {rating: FilmRating.NORMAL, from: 3, to: 5},
  {rating: FilmRating.GOOD, from: 5, to: 8},
  {rating: FilmRating.VERY_GOOD, from: 8, to: 10},
  {rating: FilmRating.AWESOME, from: 10, to: 10}
];

export const getFilmRating = (rating) => {
  const ratingRule = FilmRatingRules.find((rule) => {
    return rule.from <= rating && rating < rule.to;
  });

  return ratingRule.rating;
};
