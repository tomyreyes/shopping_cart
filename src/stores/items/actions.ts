import * as constants from '../../application/constants';
import { Item } from './types';

export type ItemsAction = RequestItemsByCategoryAction
| RequestItemsByCategorySuccessAction
| RequestItemsByCategoryErrorAction;

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
    readonly category: string;
    readonly items: ReadonlyArray<Item>;
}

export interface ItemsByCategoryErrorPayload {
    readonly category: string;
    readonly errorMessage: string;
}

export const requestItemsByCategory = (category: string): RequestItemsByCategoryAction => {
    return {
        type: constants.REQUEST_ITEMS_BY_CATEGORY,
        payload: category,
    };
};

export const requestItemsByCategorySuccess = (category: string, items: ReadonlyArray<Item>): RequestItemsByCategorySuccessAction => {
    return {
        type: constants.REQUEST_ITEMS_BY_CATEGORY_SUCCESS,
        payload: {
            category: category,
            items: items,
        },
    };
};

export const requestItemsByCategoryError = (category: string, errorMessage: string): RequestItemsByCategoryErrorAction => {
    return {
        type: constants.REQUEST_ITEMS_BY_CATEGORY_ERROR,
        payload: {
            category: category,
            errorMessage: errorMessage,
        },
    };
};