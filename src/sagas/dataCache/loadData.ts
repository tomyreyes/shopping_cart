// tslint:disable: no-expression-statement
import * as constants from '../../application/constants';
import { call, ForkEffect, put, takeLatest } from 'redux-saga/effects';
import { DataCache, loadCachedDataError, loadCachedDataSuccess } from '../../stores/dataCache';

export function* watchLoadCachedDataRequest(): IterableIterator<ForkEffect> {
    yield takeLatest(constants.LOAD_CACHED_DATA_REQUEST, loadCachedData);
}

export function* loadCachedData(): UpdateResult {
    try {
        const serializedData = yield call(getDataFromLocalStorage);
        const dataForStores = deserializeCachedData(serializedData);
        return yield put(loadCachedDataSuccess(dataForStores));
    } catch (error) {
        console.log(error);
        return yield put(loadCachedDataError());
    }
}

// tslint:disable-next-line: no-any
type UpdateResult = any;

const getDataFromLocalStorage = (): string | null => (
    localStorage.getItem('state')
);

const deserializeCachedData = (serializedData: string): DataCache => {
    if (!serializedData) {
        return setDefaultDataValuesForStore();
    }
    return JSON.parse(serializedData);
}

const setDefaultDataValuesForStore = (): DataCache => ({
    itemsList: {},
    cartItems: [],
    cost: 0,
});