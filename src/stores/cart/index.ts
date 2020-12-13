import * as constants from '../../application/constants';
import { CartAction } from './actions';
import * as R from 'ramda';
import { Item } from '../items/types';

export interface CartStore {
    readonly items: ReadonlyArray<Item>;
    readonly cost: number;
}

export const buildDefaultStore = (): CartStore => ({
    items: [],
    cost: 0,
});

export const reducer = (store: CartStore = buildDefaultStore(), action?: CartAction): CartStore => {
    if (!action) {
        return store;
    }

    switch (action.type) {
        case constants.ADD_ITEM:
            return {
                ...store,
                items: store.items.concat(action.payload),
            };
        case constants.REMOVE_ITEM:
            return {
                ...store,
                items: R.filter((item: Item): boolean => item.id !== action.payload, store.items),
            };
        default:
            return store;
    }
};