import {createSelector} from 'reselect';
import {DEFAULT_GENRE} from "../../constants/common";

const filmsSelector = (state) => state.FILM.films;
const selectedFilmSelector = (state) => state.FILM.selectedFilm;
const activeGenreSelector = (state) => state.MAIN.activeGenre;

export const filmsByGenreSelector = createSelector(
    filmsSelector,
    activeGenreSelector,
    (films, activeGenre) => DEFAULT_GENRE === activeGenre ? films : films.filter((film) => film.genre === activeGenre)
);
export const filmsLikeThisSelector = createSelector(
    filmsSelector,
    selectedFilmSelector,
    (films, selectedFilm) => selectedFilm ? films.filter((film) => film.genre === selectedFilm.genre) : []
);
