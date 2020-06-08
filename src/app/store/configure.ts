import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

export const configureStore = (reducer, saga) => {

    const sagaMiddleware = createSagaMiddleware();

    const middlewares = applyMiddleware(sagaMiddleware);

    const store = createStore(
        reducer,
        compose(middlewares),
    );

    sagaMiddleware.run(saga);
    return store;
}