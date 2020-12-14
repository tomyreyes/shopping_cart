import { aNumber, aString } from '../../application/helpers/randomTestValues';
import { buildDefaultStore, CartStore, reducer } from '../cart';
import { addItem, removeItem } from '../cart/actions';
import { DataCache, loadCachedDataSuccess } from '../dataCache';
import { Item } from '../items/types';
import moment from 'moment';

// tslint:disable:no-expression-statement typedef
describe('the cart items store', () => {
    describe('the add item action', () => {
        const price = aNumber()
        const oldStore = buildDefaultStore();
        const item: Item = {
            id: aNumber(),
            title: aString(),
            description: aString(),
            price: price,
            views: aNumber(),
            imageProperties: {
                avatarUrl: aString(),
                smallUrl: aString(),
                mediumUrl: aString(),
                fullUrl: aString(),
            },
        };
        const newStore = reducer(oldStore, addItem(item));
        it('adds an item to the items list', () => {
            expect(newStore.cartItems[0]).toBe(item);
        });

        it('adds the cost of the item to the total cost', () => {
            expect(newStore.cost).toBe(price);
        });
    });
    describe('the remove item action', () => {
        const price = 3;
        const item: Item = {
            id: aNumber(),
            title: aString(),
            description: aString(),
            price: price,
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
            cost: 10,
        };
        const newStore = reducer(oldStore, removeItem(item));
        it('removes an item from the cart items list by the remove item action', () => {
            expect(newStore.cartItems.length).toBe(0);
        });
        it('subtracts the price of the item from the total cost in the cart store', () => {
            expect(newStore.cost).toBe(7);
        });
    });
    describe('when loading cached data is successful', () => {
        // tslint:disable-next-line: no-let
        let storeState: CartStore = {
            cartItems: [],
            cost: 0,
        };
        const store = buildDefaultStore();
        const cachedData: DataCache = {
            itemsList: {
                [aString()]: {
                    type: 'SUCCESS_ITEMS_BY_CATEGORY',
                    items: [{
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
                    }],
                    lastUpdated: moment(),
                },
            },
            cartItems: [{
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
            }],
            cost: 12,
        };
        beforeEach(() => {
            const loadDataFromCacheAction = loadCachedDataSuccess(cachedData);
            storeState = reducer(store, loadDataFromCacheAction);
        });
        it('restores previous data to the cart store', () => {
            expect(storeState.cartItems).toEqual(cachedData.cartItems);
        });
        it('restors the previous cost data to the cart store', () => {
            expect(storeState.cost).toBe(12);
        });
    });
});
