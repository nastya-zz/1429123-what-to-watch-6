export enum Genre {
  ALL = `All genres`,
  COMEDIES = `Comedies`,
  CRIME = `Crime`,
  DOCUMENTARY = `Documentary`,
  DRAMAS = `Dramas`,
  HORROR = `Horror`,
  KIDS_AND_FAMILY = `Kids & Family`,
  ROMANCE = `Romance`,
  SCI_FY = `Sci-Fi`,
  THRILLERS = `Thrillers`
}

export type TGenreStrings = keyof typeof Genre;
