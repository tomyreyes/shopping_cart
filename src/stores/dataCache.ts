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

export const saveDataSuccess = (): SaveDataSuccessAction => ({
    type: constants.SAVE_DATA_SUCCESS,
});

export const saveDataError = (): SaveDataErrorAction => ({
    type: constants.SAVE_DATA_ERROR,
});