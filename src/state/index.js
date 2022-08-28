import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from "./reducers";
import rootSaga from './sagas';

export const configureStore = () => {
    const middlewares = [];
    const sagaMiddleware = createSagaMiddleware();
    middlewares.push(sagaMiddleware);

    const store = createStore(rootReducer, applyMiddleware(...middlewares));
    sagaMiddleware.run(rootSaga);
    return store;
};
