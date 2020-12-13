import { Store } from '../../stores';
import { ItemsList } from '../../stores/items/types';

export const selectItemsForCategory = (store: Store, categoryId: string): ItemsList => (
    store.items.itemsByCategory[categoryId]
);