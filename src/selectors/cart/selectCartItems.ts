import { Store } from '../../stores';
import { Item } from '../../stores/items/types';

export const selectCartItems = (store: Store): ReadonlyArray<Item> => (
    store.cart.cartItems
);