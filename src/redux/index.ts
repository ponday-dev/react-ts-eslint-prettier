import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

const reducer = combineReducers({
    router: connectRouter(history),
});
const middlewares = applyMiddleware(thunk, routerMiddleware(history));

export type State = ReturnType<typeof reducer>;
export const store = createStore(reducer, middlewares);
