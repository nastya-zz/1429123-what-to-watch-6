import {main} from './main';
import {setGenre, showMoreFilms, resetMainFilmsCount, setGenres} from '../action';
import {DEFAULT_GENRE, FilmCount} from "../../constants/common";

describe(`Test main reducer: `, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(main(undefined, {}))
      .toEqual({
        genres: [DEFAULT_GENRE],
        activeGenre: DEFAULT_GENRE,
        mainPageFilmCount: FilmCount.MAIN_PAGE,
      });
  });

  it(`Reducer [showMoreFilms] should return correct film count`, () => {
    const state = {
      mainPageFilmCount: 8
    };

    expect(main(state, showMoreFilms())).toEqual({
      mainPageFilmCount: 16
    });
  });

  it(`Reducer [resetMainFilmsCount] return default film count`, () => {
    const state = {
      mainPageFilmCount: 16
    };

    expect(main(state, resetMainFilmsCount())).toEqual({
      mainPageFilmCount: FilmCount.MAIN_PAGE
    });
  });

  it(`Reducer [setGenre] return correct genre`, () => {
    const state = {
      activeGenre: DEFAULT_GENRE
    };

    expect(main(state, setGenre(`Comedy`))).toEqual({
      activeGenre: `Comedy`
    });
  });

  it(`Reducer [setGenres] return correct genre list`, () => {
    const state = {
      genres: [DEFAULT_GENRE]
    };

    expect(main(state, setGenres([`Comedy`, `Horror`]))).toEqual({
      genres: [`Comedy`, `Horror`]
    });
  });
});
