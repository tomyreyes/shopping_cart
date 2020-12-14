import * as constants from '../../application/constants';
import { CartAction } from './actions';
import * as R from 'ramda';
import { Item } from '../items/types';

export interface CartStore {
    readonly cartItems: ReadonlyArray<Item>;
    readonly cost: number;
}

export const buildDefaultStore = (): CartStore => ({
    cartItems: [],
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
                cartItems: store.cartItems.concat(action.payload),
            };
        case constants.REMOVE_ITEM:
            const cartItem = action.payload;
            return {
                ...store,
                cartItems: R.filter((item: Item): boolean => item.id !== cartItem.id, store.cartItems),
            };
        case constants.LOAD_CACHED_DATA_SUCCESS:
            return {
                ...store,
                cartItems: store.cartItems.concat(action.payload.cartItems),
                cost: store.cost + action.payload.cost,
            };
        default:
            return store;
    }
};