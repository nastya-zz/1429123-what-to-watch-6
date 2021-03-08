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
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.MAIN} render={({history}) => <Main history={history} />} />
        <Route exact path={AppRoute.LOGIN} render={() => <SignIn />} />
        <PrivateRoute exact path={AppRoute.MY_LIST} render={({history}) => <MyList history={history} />}/>
        <PrivateRoute exact path={AppRoute.ADD_REVIEW} render={({history}) => <AddReview history={history} />}/>
        <Route path={AppRoute.FILM} render={({history}) => <Film films={films} history={history} />} />
        <Route path={AppRoute.PLAYER} render={({history}) => <Player films={films} history={history} />} />
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
