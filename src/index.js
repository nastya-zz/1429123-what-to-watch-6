import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

import {Genre} from "./mocks/genres";
import {films} from "./mocks/films";

const genres = Object.values(Genre);

ReactDOM.render(
    <App
      genres={genres}
      films={films}
    />,
    document.querySelector(`#root`),
);
