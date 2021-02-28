import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {Genre} from "./constants/genres";
import {films} from "./mocks/films";
import {reducer} from "./store/reducer";
import {composeWithDevTools} from 'redux-devtools-extension';

const genres = Object.values(Genre);

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
    <Provider store={store}>
      <App
        genres={genres}
        films={films}
      />
    </Provider>,
    document.querySelector(`#root`),
);
