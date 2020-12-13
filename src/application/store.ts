import { applyMiddleware, compose } from 'redux';
import { buildDefaultStore, reducer } from '../stores';
import { createStore } from 'redux';
import { ApplicationSaga } from '../sagas';

type CreatedStore = ReturnType<typeof createStore>;

export const buildStore = (saga: ApplicationSaga): CreatedStore => {
    const middleware = applyMiddleware(saga.middleware);
    const store = buildDefaultStore();
    const enhancers = compose(middleware);
    return createStore(reducer, store, enhancers);
};