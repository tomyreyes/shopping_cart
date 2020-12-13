import { buildDefaultStore, reducer } from '../cart';
import { addItem } from '../cart/actions';

// tslint:disable:no-expression-statement typedef
describe('the store reducer', () => {
    describe('the items state', () => {
        it('adds a number to the items list by the add item action', () => {
            const oldStore = buildDefaultStore();
            const item = {
                id: '1',
                title: 'First item in cart',
            };
            const newStore = reducer(oldStore, addItem(item));
            expect(newStore.items[0]).toBe(item);
        });
    });
});