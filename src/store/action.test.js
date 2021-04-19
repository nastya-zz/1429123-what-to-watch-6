import * as Action from './action';
import {ActionType} from "./action";
import {AppRoute, AuthorizationStatus} from "../constants/common";


describe(`Actions creators work correctly`, () => {
  it(`Action creator for set genre returns correct action`, () => {
    const type = `All genres`;
    const expectedAction = {
      type: ActionType.SET_GENRE,
      payload: `All genres`,
    };

    expect(Action.setGenre(type)).toEqual(expectedAction);
  });

  it(`Action creator for show more films returns correct action`, () => {
    const expectedAction = {
      type: ActionType.SHOW_MORE_FILMS,
    };

    expect(Action.showMoreFilms()).toEqual(expectedAction);
  });

  it(`Action creator for reset main films count returns correct action`, () => {
    const expectedAction = {
      type: ActionType.RESET_MAIN_FILMS_COUNT,
    };

    expect(Action.resetMainFilmsCount()).toEqual(expectedAction);
  });

  it(`Action creator for require authorization returns correct action`, () => {
    const status = AuthorizationStatus.AUTH;
    const expectedAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };

    expect(Action.requireAuthorization(status)).toEqual(expectedAction);
  });

  it(`Action creator for load films returns correct action`, () => {
    const films = [];
    const expectedAction = {
      type: ActionType.LOAD_FILMS,
      payload: films
    };

    expect(Action.loadFilms(films)).toEqual(expectedAction);
  });

  it(`Action creator for set promo film returns correct action`, () => {
    const film = {};
    const expectedAction = {
      type: ActionType.SET_PROMO_FILM,
      payload: film
    };

    expect(Action.setPromoFilm(film)).toEqual(expectedAction);
  });

  it(`Action creator for load favorite list returns correct action`, () => {
    const films = [];
    const expectedAction = {
      type: ActionType.LOAD_FAVORITE_LIST,
      payload: films
    };

    expect(Action.loadFavoriteList(films)).toEqual(expectedAction);
  });

  it(`Action creator for set user returns correct action`, () => {
    const user = {};

    const expectedAction = {
      type: ActionType.SET_USER,
      payload: user
    };

    expect(Action.setUser(user)).toEqual(expectedAction);
  });

  it(`Action creator for redirect to route returns correct action`, () => {
    const route = AppRoute.MAIN;

    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: route
    };

    expect(Action.redirectToRoute(route)).toEqual(expectedAction);
  });

  it(`Action creator for load film by id returns correct action`, () => {
    const film = {};

    const expectedAction = {
      type: ActionType.LOAD_FILM_BY_ID,
      payload: film
    };

    expect(Action.loadFilmById(film)).toEqual(expectedAction);
  });

  it(`Action creator for load review list returns correct action`, () => {
    const reviewList = [];

    const expectedAction = {
      type: ActionType.LOAD_REVIEW_LIST,
      payload: reviewList
    };

    expect(Action.loadReviewList(reviewList)).toEqual(expectedAction);
  });
  it(`Action creator for set genres returns correct action`, () => {
    const genres = [];

    const expectedAction = {
      type: ActionType.SET_GENRES,
      payload: genres
    };

    expect(Action.setGenres(genres)).toEqual(expectedAction);
  });

  it(`Action creator for set show review error Msg returns correct action`, () => {
    const flag = true;

    const expectedAction = {
      type: ActionType.SET_SHOW_REVIEW_ERROR_MSG,
      payload: true
    };

    expect(Action.setShowReviewErrorMsg(flag)).toEqual(expectedAction);
  });

  it(`Action creator for set selected film by id loaded returns correct action`, () => {
    const flag = true;

    const expectedAction = {
      type: ActionType.SET_SELECTED_FILM_BY_ID_LOADED,
      payload: true
    };

    expect(Action.setSelectedFilmByIdLoaded(flag)).toEqual(expectedAction);
  });
});
