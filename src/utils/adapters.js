export const getAdaptedFilm = (filmRaw) => {

  const adaptedFilm = Object.assign({}, {
    ...filmRaw,
    "posterImage": filmRaw.poster_image,
    "previewImage": filmRaw.preview_image,
    "backgroundImage": filmRaw.background_image,
    "videoLink": filmRaw.video_link,
    "previewVideoLink": filmRaw.preview_video_link,
    "scoresCount": filmRaw.scores_count,
    "runTime": filmRaw.run_time,
    "isFavorite": filmRaw.is_favorite,
  });
  delete adaptedFilm[`poster_image`];
  delete adaptedFilm[`preview_image`];
  delete adaptedFilm[`background_image`];
  delete adaptedFilm[`background_color`];
  delete adaptedFilm[`video_link`];
  delete adaptedFilm[`preview_video_link`];
  delete adaptedFilm[`scores_count`];
  delete adaptedFilm[`run_time`];
  delete adaptedFilm[`is_favorite`];

  return adaptedFilm;
};
