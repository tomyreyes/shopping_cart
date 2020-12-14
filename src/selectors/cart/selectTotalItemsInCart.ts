import { Store } from '../../stores';

export const selectTotalItemsInCart = (store: Store): number => (
    store.cart.cartItems.length === 0 ? 0 : store.cart.cartItems.length
);