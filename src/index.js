import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {Provider} from 'react-redux';
import reducer from "./store/root-reducer";
import {AuthorizationStatus} from "./constants/common";
import {createAPI} from "./api";
import {checkAuth} from "./store/api-actions";
import {redirect} from './store/middlewares/redirect';
import {configureStore} from "@reduxjs/toolkit";
import {redirectToRoute, requireAuthorization} from "./store/action";

const api = createAPI(
    () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)),
    () => store.dispatch(redirectToRoute(`/page-not-found`))
);

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      },
    }).concat(redirect)
});

store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector(`#root`),
);
