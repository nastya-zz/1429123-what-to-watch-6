/**
 * поиск фильма по ид
 * @param {string} id
 * @param {object[]} films
 * @returns {object} объект фильма
 */

export const findFilmById = (id, films) => {
  return films.find((movie) => movie.id === parseInt(id, 10));
};

/**
 * длительность фильма
 * @param {number} minutes
 * @return {string}
 */
export const getFilmDuration = (minutes) => {
  if (minutes > 60) {
    const hours = Math.trunc(minutes / 60);
    minutes = Math.floor((((minutes / 60 - hours) * 60) / 100) * 100);

    return `${hours}h ${minutes}m`;
  } else {
    return `${minutes}m`;
  }
};

/**
 *  форматирование даты
 * @param {number} dateLong
 * @return {string}
 */
export const formatDate = (dateLong) => {
  const options = {
    month: `long`,
    day: `numeric`,
    year: `numeric`
  };
  return dateLong ? new Intl.DateTimeFormat(`en-US`, options).format(new Date(dateLong)) : ``;
};
