/**
 * поиск фильма по ид
 * @param {string} id
 * @param {object[]} films
 * @returns {object} объект фильма
 */

export const findFilmById = (id, films) => {
  return films.find((movie) => movie.id === parseInt(id, 10));
};
