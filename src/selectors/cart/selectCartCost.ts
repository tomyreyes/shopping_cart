import { Store } from '../../stores';

export const selectCartCost = (store: Store): number => (
    store.cart.cost
);