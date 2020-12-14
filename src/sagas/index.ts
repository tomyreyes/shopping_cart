// tslint:disable:no-expression-statement
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import { watchLoadCachedDataRequest } from './dataCache/loadData';
import { watchRequestItemsByCategory } from './items';
import { watchStateChangesToSaveToCache } from './dataCache/saveData';

export const sagaMiddleware = createSagaMiddleware();

export interface ApplicationSaga {
    readonly middleware: SagaMiddleware<object>;
}

export const buildSaga = (): ApplicationSaga => ({
    middleware: createSagaMiddleware<object>(),
});

export function runSaga(middleware: SagaMiddleware<object>): void {
    middleware.run(watchRequestItemsByCategory);
    middleware.run(watchStateChangesToSaveToCache);
    middleware.run(watchLoadCachedDataRequest);
}