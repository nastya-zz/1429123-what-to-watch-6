import {film} from './film';
import {
  loadFavoriteList,
  loadFilmById,
  loadFilms,
  loadReviewList, setPromoFilm,
  setSelectedFilmByIdLoaded,
  setShowReviewErrorMsg,
} from "../action";

describe(``, () => {
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
