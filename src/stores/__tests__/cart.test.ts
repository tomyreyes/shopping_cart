import { aNumber, aString } from '../../application/helpers/randomTestValues';
import { buildDefaultStore, reducer } from '../cart';
import { addItem, removeItem } from '../cart/actions';
import { Item } from '../items/types';

// tslint:disable:no-expression-statement typedef
describe('the store reducer', () => {
    describe('the cart items state', () => {
        it('adds a item to the items list by the add item action', () => {
            const oldStore = buildDefaultStore();
            const item: Item = {
                id: aNumber(),
                title: aString(),
                description: aString(),
                price: aNumber(),
                views: aNumber(),
                imageProperties: {
                    avatarUrl: aString(),
                    smallUrl: aString(),
                    mediumUrl: aString(),
                    fullUrl: aString(),
                },
            };
            const newStore = reducer(oldStore, addItem(item));
            expect(newStore.cartItems[0]).toBe(item);
        });

        it('removes an item from the cart items list by the remove item action', () => {
            const item: Item = {
                id: aNumber(),
                title: aString(),
                description: aString(),
                price: aNumber(),
                views: aNumber(),
                imageProperties: {
                    avatarUrl: aString(),
                    smallUrl: aString(),
                    mediumUrl: aString(),
                    fullUrl: aString(),
                },
            };
            const oldStore = {
                ...buildDefaultStore(),
                items: [item],
                cost: 0,
            };
            const newStore = reducer(oldStore, removeItem(item.id));
            expect(newStore.cartItems.length).toBe(0);
        });
    });
});