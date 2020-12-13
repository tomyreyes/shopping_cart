// tslint:disable:no-expression-statement
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import { watchRequestItemsByCategory } from './items';

export const sagaMiddleware = createSagaMiddleware();

export interface ApplicationSaga {
    readonly middleware: SagaMiddleware<object>;
}

export const buildSaga = (): ApplicationSaga => ({
    middleware: createSagaMiddleware<object>(),
});

export function runSaga(middleware: SagaMiddleware<object>): void {
    middleware.run(watchRequestItemsByCategory);
}