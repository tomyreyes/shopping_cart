// tslint:disable: no-expression-statement typedef
import { aNumber, aString } from '../../application/helpers/randomTestValues';
import * as constants from '../../application/constants';
import { buildDefaultStore, reducer } from '../items';
import { RequestItemsByCategoryAction, RequestItemsByCategoryErrorAction, RequestItemsByCategorySuccessAction } from '../items/actions';
import { Item } from '../items/types';

describe('the items reducer', () => {
    describe('when sending a request for items by category', () => {
        it ('creates a loading items by category object', () => {
            const oldStore = buildDefaultStore();
            const category = aString();
            const action: RequestItemsByCategoryAction = {
                type: constants.REQUEST_ITEMS_BY_CATEGORY,
                payload: category,
            };
            const newStore = reducer(oldStore, action);
            expect(newStore.itemsByCategory[category].type).toBe(constants.LOADING_ITEMS_BY_CATEGORY);
        });
    });

    describe('when a successful items by category is received', () => {
        it('creates a success items by category object', () => {
            const oldStore = buildDefaultStore();
            const category = aString();
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
            const action: RequestItemsByCategorySuccessAction = {
                type: constants.REQUEST_ITEMS_BY_CATEGORY_SUCCESS,
                payload: {
                    category,
                    items: [item],
                },
            };
            const newStore = reducer(oldStore, action);
            expect(newStore.itemsByCategory[category].type).toBe(constants.SUCCESS_ITEMS_BY_CATEGORY);
        });
    });

    describe('when an error response is received', () => {
        it('creates an error items by category object', () => {
            const oldStore = buildDefaultStore();
            const category = aString();
            const errorMessage = 'An error has been received.';
            const action: RequestItemsByCategoryErrorAction = {
                type: constants.REQUEST_ITEMS_BY_CATEGORY_ERROR,
                payload: {
                    category,
                    errorMessage,
                },
            };
            const newStore = reducer(oldStore, action);
            expect(newStore.itemsByCategory[category].type).toBe(constants.ERROR_ITEMS_BY_CATEGORY);
        });
    });
});