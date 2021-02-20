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

import {filmsPropTypes} from "../../prop-types/film";

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
          <MyList films={films} />
        </Route>
        <Route exact path="/films/:id/review">
          <AddReview films={films} />
        </Route>
        <Route path="/films/:id">
          <Film films={films} />
        </Route>
        <Route path="/player/:id">
          <Player films={films} />
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
  films: filmsPropTypes
};

export default App;
