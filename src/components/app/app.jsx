import React from 'react';
import PropTypes from 'prop-types';
import {Switch, BrowserRouter, Route} from 'react-router-dom';

import Main from '../main/main';
import Film from '../film/film';
import Player from '../player/player';
import AddReview from '../add-review/add-review';
import MyList from '../my-list/my-list';
import SignIn from '../sign-in/sign-in';
import PageNotFound from '../app/page-404';

import {shapeFilm} from '../../mocks/films';


const App = (props) => {
  const {genres, films} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main genres={genres} films={films} />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/mylist">
          <MyList />
        </Route>
        <Route path="/films/:id">
          <Film films={films} />
        </Route>
        <Route exact path="/player/:id">
          <Player />
        </Route>
        <Route exact path="/addreview">
          <AddReview />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  films: PropTypes.arrayOf(
      PropTypes.shape(shapeFilm)
  ).isRequired
};

export default App;
