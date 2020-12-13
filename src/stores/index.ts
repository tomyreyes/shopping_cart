import { combineReducers } from 'redux';
import * as cart from './cart';
import * as items from './items';

export interface Store {
    readonly cart: cart.CartStore;
    readonly items: items.ItemsStore;
}

export const buildDefaultStore = (): Store => ({
    cart: cart.buildDefaultStore(),
    items: items.buildDefaultStore(),
});

export const reducer = combineReducers<Store>({
    cart: cart.reducer,
    items: items.reducer,
});