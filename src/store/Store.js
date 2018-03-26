import {createStore,compose,applyMiddleware} from 'redux';
import reducer from '../reducer'

const win = window;

const middlewares = [];

const storeEnhancers = compose(
    applyMiddleware(...middlewares),
    (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
);

export default createStore(reducer,{},storeEnhancers)