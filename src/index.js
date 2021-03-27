import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from "./store/reducer";
import {composeWithDevTools} from 'redux-devtools-extension';
import {ActionCreator} from './store/action';
import {AuthorizationStatus} from "./constants/common";
import thunk from "redux-thunk";
import {createAPI} from "./api";
import {checkAuth} from "./store/api-actions";
import {redirect} from './store/middlewares/redirect';

const api = createAPI(
    () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)),
    () => store.dispatch(ActionCreator.redirectToRoute(`/page-not-found`))
);

const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
    applyMiddleware(redirect)
));

store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector(`#root`),
);
