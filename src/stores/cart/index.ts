import * as constants from '../../application/constants';
import { CartAction } from './actions';
import * as R from 'ramda';

export interface CartStore {
    // TODO change this to declared type for products
    // tslint:disable-next-line: no-any
    readonly items: ReadonlyArray<any>;
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
                // tslint:disable-next-line: no-any
                items: R.filter((item: any): any => item.id !== action.payload, store.items),
            };
        default:
            return store;
    }
};