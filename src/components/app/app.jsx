import React, {useEffect} from 'react';
import {Route, Router as BrowserRouter, Switch} from 'react-router-dom';
import PrivateRoute from '../private-route/private-route';
import Main from '../main/main';
import Film from '../film/film';
import Player from '../player/player';
import AddReview from '../add-review/add-review';
import MyList from '../my-list/my-list';
import SignIn from '../sign-in/sign-in';
import PageNotFound from '../app/page-404';
import {fetchFilmList} from "../../store/api-actions";
import {useDispatch, useSelector} from "react-redux";
import browserHistory from "../../browser-history";
import {AppRoute} from "../../constants/common";
import LoadingScreen from "../loading/loading";
import withSelectedFilm from "../hocs/withSelectedFilm";

const FilmWrapped = withSelectedFilm(Film);
const AddReviewWrapped = withSelectedFilm(AddReview);

const App = () => {
  const dispatch = useDispatch();
  const isFilmsLoaded = useSelector(({FILM}) => FILM.isFilmsLoaded);

  useEffect(() => {
    if (!isFilmsLoaded) {
      dispatch(fetchFilmList());
    }
  }, [isFilmsLoaded]);

  if (!isFilmsLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.MAIN} render={({history}) => <Main history={history} />} />
        <Route exact path={AppRoute.LOGIN} render={() => <SignIn />} />
        <PrivateRoute exact path={AppRoute.MY_LIST} render={({history}) => <MyList history={history} />}/>
        <PrivateRoute exact path={`${AppRoute.FILM}/:id${AppRoute.ADD_REVIEW}`} render={({history}) => <AddReviewWrapped history={history} />}/>
        <Route exact path={`${AppRoute.FILM}/:id`} render={({history}) => <FilmWrapped history={history}/>} />
        <Route exact path={`${AppRoute.PLAYER}/:id`} render={({history}) => <Player history={history} />} />
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
