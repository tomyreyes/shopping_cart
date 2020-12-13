import { combineReducers } from 'redux';
import * as cart from './cart';

export interface Store {
    readonly cart: cart.CartStore;
}

export const buildDefaultStore = (): Store => ({
    cart: cart.buildDefaultStore(),
});

export const reducer = combineReducers<Store>({
    cart: cart.reducer,
});