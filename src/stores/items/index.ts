import * as constants from '../../application/constants';
import { ItemsAction } from './actions';
import { ItemsByCategory } from './types';

export interface ItemsStore {
    readonly itemsByCategory: ItemsByCategory;
}

export const buildDefaultStore = (): ItemsStore => ({
    itemsByCategory: {},
});

export const reducer = (store: ItemsStore = buildDefaultStore(), action?: ItemsAction): ItemsStore => {
    if (!action) {
        return store;
    }

    switch (action.type) {
        case constants.REQUEST_ITEMS_BY_CATEGORY:
            return {
                ...store,
                itemsByCategory: {
                    ...store.itemsByCategory,
                    [action.payload]: {
                        type: constants.LOADING_ITEMS_BY_CATEGORY,
                    },
                },
            };
        case constants.REQUEST_ITEMS_BY_CATEGORY_SUCCESS:
            return {
                ...store,
                itemsByCategory: {
                    ...store.itemsByCategory,
                    [action.payload.categoryId]: {
                        type: constants.SUCCESS_ITEMS_BY_CATEGORY,
                        items: action.payload.items,
                        lastUpdated: action.payload.lastUpdated,
                    },
                },
            };
        case constants.REQUEST_ITEMS_BY_CATEGORY_ERROR:
            return {
                ...store,
                itemsByCategory: {
                    ...store.itemsByCategory,
                    [action.payload.categoryId]: {
                        type: constants.ERROR_ITEMS_BY_CATEGORY,
                        errorMessage: action.payload.errorMessage,
                    },
                },
            };
        case constants.LOAD_CACHED_DATA_SUCCESS:
            return {
                ...store,
                itemsByCategory: action.payload.itemsList,
            };
        default:
            return store;
    }
};