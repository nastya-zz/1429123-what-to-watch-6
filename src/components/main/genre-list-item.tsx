import * as React from 'react'
import {Genre, TGenreStrings} from "../../mocks/genres";

const GenreListItem = ({genre}) => {
  // const {genre} = props;
  return (
    <>
      <li className="catalog__genres-item catalog__genres-item--active">
        <a href="#" className="catalog__genres-link">{genre}</a>
      </li>
    </>
  );
};


export default GenreListItem;
