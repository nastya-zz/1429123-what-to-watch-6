import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Main from '../main/main';
import Film from '../film/film';
import Player from '../player/player';
import AddReview from '../add-review/add-review';
import MyList from '../my-list/my-list';
import SignIn from '../sign-in/sign-in';
import PageNotFound from '../app/page-404';
import {fetchFilmList} from "../../store/api-actions";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

const App = () => {
  const dispatch = useDispatch();
  const isFilmsLoaded = useSelector((state) => state.isFilmsLoaded);
  const films = useSelector((state) => state.films);

  useEffect(() => {
    if (!isFilmsLoaded) {
      dispatch(fetchFilmList());
    }
  }, [isFilmsLoaded]);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main />
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

export default App;
