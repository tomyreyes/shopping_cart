import { buildDefaultStore, reducer } from '../cart';
import { addItem, removeItem } from '../cart/actions';

// tslint:disable:no-expression-statement typedef
describe('the store reducer', () => {
    describe('the items state', () => {
        it('adds a item to the items list by the add item action', () => {
            const oldStore = buildDefaultStore();
            const item = {
                id: '1',
                title: 'First item in cart',
            };
            const newStore = reducer(oldStore, addItem(item));
            expect(newStore.items[0]).toBe(item);
        });

        it('removes an item from the items list by the remove item action', () => {
            const oldStore = {
                ...buildDefaultStore(),
                items: [{
                    id: '1',
                    title: 'First item in cart',
                }],
                cost: 0,
            };
            const itemId = '1';
            const newStore = reducer(oldStore, removeItem(itemId));
            expect(newStore.items.length).toBe(0);
        });
    });
});