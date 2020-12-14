// tslint:disable: no-expression-statement
import * as constants from '../../application/constants';
import { ForkEffect, select, takeLatest, call, put } from 'redux-saga/effects';
import { selectDataForCache } from '../../selectors/cache/selectDataForCache';
import { DataCache, saveDataError, saveDataSuccess } from '../../stores/dataCache';

export function* watchStateChangesToSaveToCache(): IterableIterator<ForkEffect> {
    yield takeLatest([
        constants.REQUEST_ITEMS_BY_CATEGORY_SUCCESS,
        constants.ADD_ITEM,
    ], saveDataToCache);
}

export function* saveDataToCache(): UpdateResult {
    try {
        const dataForCache: DataCache = yield select(selectDataForCache);
        const serializedData = serializeData(dataForCache);
        yield call(saveDataToLocalStorage, serializedData);
        return yield put(saveDataSuccess());
    } catch (error) {
        console.log(error);
        return yield put (saveDataError());
    }
}

// tslint:disable-next-line: no-any
type UpdateResult = any;

const serializeData = (data: DataCache): string => (
    JSON.stringify(data)
);

const saveDataToLocalStorage = (serializedData: string): void => {
    localStorage.setItem('state', serializedData);
};