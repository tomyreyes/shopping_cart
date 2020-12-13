import * as constants from '../application/constants';
import { ItemsByCategory } from './items/types';

export interface DataCache {
    readonly itemsList: ItemsByCategory;
}

export interface SaveDataSuccessAction {
    readonly type: typeof constants.SAVE_DATA_SUCCESS;
}

export interface SaveDataErrorAction {
    readonly type: typeof constants.SAVE_DATA_ERROR;
}

export interface LoadCachedDataRequestAction {
    readonly type: typeof constants.LOAD_CACHED_DATA_REQUEST;
}

export interface LoadCachedDataSuccessAction {
    readonly type: typeof constants.LOAD_CACHED_DATA_SUCCESS;
    readonly payload: DataCache;
}

export interface LoadCachedDataErrorAction {
    readonly type: typeof constants.LOAD_CACHED_DATA_ERROR;
}

export const saveDataSuccess = (): SaveDataSuccessAction => ({
    type: constants.SAVE_DATA_SUCCESS,
});

export const saveDataError = (): SaveDataErrorAction => ({
    type: constants.SAVE_DATA_ERROR,
});

export const loadCachedDataRequest = (): LoadCachedDataRequestAction => ({
    type: constants.LOAD_CACHED_DATA_REQUEST,
});

export const loadCachedDataSuccess = (dataCache: DataCache): LoadCachedDataSuccessAction => ({
    type: constants.LOAD_CACHED_DATA_SUCCESS,
    payload: dataCache,
});

export const loadCachedDataError = (): LoadCachedDataErrorAction => ({
    type: constants.LOAD_CACHED_DATA_ERROR,
});
