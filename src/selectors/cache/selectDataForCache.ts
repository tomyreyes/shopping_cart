import { Store } from '../../stores';
import { DataCache } from '../../stores/dataCache';

export const selectDataForCache = (store: Store): DataCache => ({
    itemsList: store.items.itemsByCategory,
    cartItems: store.cart.cartItems,
    cost: store.cart.cost,
});