import {film} from './film';
import MockAdapter from "axios-mock-adapter";
import {
  loadFavoriteList,
  loadFilmById,
  loadFilms,
  loadReviewList,
  setGenre,
  setGenres,
  setPromoFilm,
  setSelectedFilmByIdLoaded,
  setShowReviewErrorMsg,
} from "../action";
import {createAPI} from "../../api";
import {ApiRoute, DEFAULT_GENRE} from "../../constants/common";
import {fetchFavoriteFilmList, fetchFilmList, fetchReviewList} from "../api-actions";
import {films} from "../../mocks/films";
import {getAdaptedFilm} from "../../utils/adapters";
import {reviews} from "../../mocks/review";

const api = createAPI(() => {});

describe(`Test film reducer`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(film(undefined, {}))
      .toEqual({
        films: [],
        isFilmsLoaded: false,
        selectedFilm: null,
        selectedFilmReviewList: [],
        isSelectedFilmLoaded: false,
        showReviewErrorMsg: false,
        myList: [],
        promoFilm: null,
      });
  });

  it(`Reducer should set loaded films`, () => {
    const filmList = [{name: `Some Film`}];
    const state = {
      films: [],
      isFilmsLoaded: false,
    };

    expect(film(state, loadFilms(filmList)))
      .toEqual({
        films: [{name: `Some Film`}],
        isFilmsLoaded: true
      });
  });

  it(`Reducer should set loaded film by id`, () => {
    const movie = {
      name: `Some film`
    };
    const state = {
      selectedFilm: null,
      isSelectedFilmLoaded: false,
    };

    expect(film(state, loadFilmById(movie)))
      .toEqual({
        selectedFilm: {name: `Some film`},
        isSelectedFilmLoaded: true
      });
  });

  it(`Reducer should set loaded review list`, () => {
    const selectedFilmReviewList = [{comment: `some comment`}];

    const state = {
      selectedFilmReviewList: [],
    };

    expect(film(state, loadReviewList(selectedFilmReviewList)))
      .toEqual({
        selectedFilmReviewList: [{comment: `some comment`}]
      });
  });

  it(`setSelectedFilmByIdLoaded`, () => {
    const state = {
      isSelectedFilmLoaded: false,
    };

    expect(film(state, setSelectedFilmByIdLoaded(true)))
      .toEqual({
        isSelectedFilmLoaded: true
      });
    expect(film(state, setSelectedFilmByIdLoaded(false)))
      .toEqual({
        isSelectedFilmLoaded: false
      });
  });

  it(`setShowReviewErrorMsg`, () => {
    const showReviewErrorMsg = true;

    const state = {
      showReviewErrorMsg: false,
    };

    expect(film(state, setShowReviewErrorMsg(showReviewErrorMsg)))
      .toEqual({
        showReviewErrorMsg: true
      });
  });

  it(`loadFavoriteList`, () => {
    const filmList = [{name: `Some film`}];

    const state = {
      myList: [],
    };

    expect(film(state, loadFavoriteList(filmList)))
      .toEqual({
        myList: [{name: `Some film`}]
      });
  });

  it(`setPromoFilm`, () => {
    const promoFilm = {name: `Some promo film`};

    const state = {
      promoFilm: null,
    };

    expect(film(state, setPromoFilm(promoFilm)))
      .toEqual({
        promoFilm: {name: `Some promo film`}
      });
  });
});

describe(`Async operations work correctly`, () => {
  it(`Should make a correct API call to /films`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmLoader = fetchFilmList();

    apiMock
      .onGet(ApiRoute.FILMS)
      .reply(200, films);

    const genres = [DEFAULT_GENRE, ...new Set(films.map((movie) => movie.genre))];
    const adaptedFilmList = films.map((movie) => getAdaptedFilm(movie));

    return filmLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);

        expect(dispatch).toHaveBeenNthCalledWith(1, loadFilms(adaptedFilmList));
        expect(dispatch).toHaveBeenNthCalledWith(2, setGenres(genres));
        expect(dispatch).toHaveBeenNthCalledWith(3, setGenre(DEFAULT_GENRE));
      });
  });

  it(`Should make a correct API call to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoriteFilmLoader = fetchFavoriteFilmList();

    apiMock
      .onGet(ApiRoute.FAVORITE)
      .reply(200, films);

    const adaptedFilmList = films.map((movie) => getAdaptedFilm(movie));

    return favoriteFilmLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, loadFavoriteList(adaptedFilmList));
      });
  });

  it(`Should make a correct API call to /comments`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchReviewListLoader = fetchReviewList(1);

    apiMock
      .onGet(`${ApiRoute.COMMENTS}/1`)
      .reply(200, reviews);

    return fetchReviewListLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, loadReviewList(reviews));
      });
  });
});
