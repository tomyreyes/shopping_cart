import * as constants from '../../application/constants';
import { LoadCachedDataErrorAction, LoadCachedDataSuccessAction } from '../dataCache';
import { Item } from './types';
import * as moment from 'moment';

export type ItemsAction = RequestItemsByCategoryAction
| RequestItemsByCategorySuccessAction
| RequestItemsByCategoryErrorAction
| LoadCachedDataSuccessAction
| LoadCachedDataErrorAction;

export interface RequestItemsByCategoryAction {
    readonly type: typeof constants.REQUEST_ITEMS_BY_CATEGORY;
    readonly payload: string;
}

export interface RequestItemsByCategorySuccessAction {
    readonly type: typeof constants.REQUEST_ITEMS_BY_CATEGORY_SUCCESS;
    readonly payload: ItemsByCategorySuccessPayload;
}

export interface RequestItemsByCategoryErrorAction {
    readonly type: typeof constants.REQUEST_ITEMS_BY_CATEGORY_ERROR;
    readonly payload: ItemsByCategoryErrorPayload;
}

export interface ItemsByCategorySuccessPayload {
    readonly categoryId: string;
    readonly items: ReadonlyArray<Item>;
    readonly lastUpdated: moment.Moment;
}

export interface ItemsByCategoryErrorPayload {
    readonly categoryId: string;
    readonly errorMessage: string;
}

export const requestItemsByCategory = (categoryId: string): RequestItemsByCategoryAction => {
    return {
        type: constants.REQUEST_ITEMS_BY_CATEGORY,
        payload: categoryId,
    };
};

export const requestItemsByCategorySuccess = (categoryId: string, items: ReadonlyArray<Item>, lastUpdated: moment.Moment):
    RequestItemsByCategorySuccessAction => {
    return {
        type: constants.REQUEST_ITEMS_BY_CATEGORY_SUCCESS,
        payload: {
            categoryId: categoryId,
            items: items,
            lastUpdated: lastUpdated,
        },
    };
};

export const requestItemsByCategoryError = (categoryId: string, errorMessage: string): RequestItemsByCategoryErrorAction => {
    return {
        type: constants.REQUEST_ITEMS_BY_CATEGORY_ERROR,
        payload: {
            categoryId: categoryId,
            errorMessage: errorMessage,
        },
    };
};